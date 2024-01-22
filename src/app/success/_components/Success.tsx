"use client";
import { deleteBooking, getOneBooking } from "@/services/booking";
import { format, parse, parseISO } from "date-fns";
import { useState, useEffect } from "react";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { io } from "socket.io-client";

export default function Success({ id }: { id: any }) {
  const queryClient = useQueryClient();
  const socketio = io("ws://localhost:8000");

  async function deleteBk() {
    let res = await deleteBooking(id.order_id);
    if (res?.status === 0) {
      queryClient.invalidateQueries({
        queryKey: ["email"],
      });
    }
  }
  const { data } = useQuery("success", {
    queryFn: () => getOneBooking(id.order_id),
    onSuccess(data) {
      if (id.vnp_ResponseCode && id.vnp_ResponseCode !== "00") {
        socketio.emit("unpaidseat", {
          id: data[0].screeningId,
          time: data[0].times,
          seats: data[0].seats,
        });
        deleteBk();
      }
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div style={{ padding: "80px 150px", position: "relative" }}>
      <div
        className=''
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundImage:
            "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/background-movie-playing-home-3.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
          opacity: ".05",
          mixBlendMode: "luminosity",
        }}></div>
      <div className='' style={{ position: "relative" }}>
        <h1>Order received</h1>
        <p style={{ margin: "15px 0", color: "grey" }}>
          Thank you. Your order has been received.
        </p>
        <div className='' style={{ display: "flex" }}>
          <div
            className=''
            style={{
              paddingRight: "20px",
              borderRight: "2px dashed #cfc8d8",
            }}>
            <p style={{ color: "grey", fontSize: "12px" }}>ORDER NUMBER:</p>
            <p style={{ color: "#000", fontWeight: "700" }}>
              {data && data[0].order_id}
            </p>
          </div>
          <div
            className=''
            style={{ padding: " 0 20px", borderRight: "2px dashed #cfc8d8" }}>
            <p style={{ color: "grey", fontSize: "12px" }}>DATE:</p>
            <p style={{ color: "#000", fontWeight: "700" }}>
              {data &&
                format(parseISO(data[0].createdAt), " HH:mm:ss - dd/MM/yyyy")}
            </p>
          </div>
          <div
            className=''
            style={{ padding: " 0 20px", borderRight: "2px dashed #cfc8d8" }}>
            <p style={{ color: "grey", fontSize: "12px" }}>TOTAL:</p>
            <p style={{ color: "#000", fontWeight: "700" }}>
              {" "}
              {data &&
                data[0].total.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
            </p>
          </div>
          <div
            className=''
            style={{ padding: " 0 20px", borderRight: "2px dashed #cfc8d8" }}>
            <p style={{ color: "grey", fontSize: "12px" }}>PAYMENT METHOD:</p>
            <p style={{ color: "#000", fontWeight: "700" }}>
              Chuyển khoản trực tiếp
            </p>
          </div>
          {id.vnp_ResponseCode ? (
            <div className='' style={{ padding: " 0 20px" }}>
              <p style={{ color: "grey", fontSize: "12px" }}>Trạng thái</p>
              <p style={{ color: "#000", fontWeight: "700" }}>
                {id.vnp_ResponseCode === "00"
                  ? "Thành công"
                  : "Chưa thanh toán"}
              </p>
            </div>
          ) : (
            <div className='' style={{ padding: " 0 20px" }}>
              <p style={{ color: "grey", fontSize: "12px" }}>Trạng thái</p>
              <p style={{ color: "#000", fontWeight: "700" }}>
                {data && data[0].status === "paid"
                  ? "Thành công"
                  : "Chưa thanh toán"}
              </p>
            </div>
          )}
        </div>
        <div className='' style={{ marginTop: "45px" }}>
          <h3>ORDER DETAILS</h3>
        </div>
        <div
          className=''
          style={{
            borderRadius: "5px",
            border: "1px solid grey",
            marginTop: "10px",
            width: "100%",
          }}>
          <div
            className=''
            style={{ display: "flex", borderBottom: "1px solid grey" }}>
            <div
              className=''
              style={{
                width: "60%",
                padding: "15px",
                borderRight: "1px solid grey",
                fontWeight: "700",
              }}>
              Product
            </div>
            <div
              className=''
              style={{ width: "40%", padding: "15px", fontWeight: "700" }}>
              Total
            </div>
          </div>
          <div
            className=''
            style={{ display: "flex", borderBottom: "1px solid grey" }}>
            <div
              className=''
              style={{
                width: "60%",
                padding: "15px",
                borderRight: "1px solid grey",
              }}>
              <h4>{data && data[0].movie}</h4>
              <div
                style={{
                  marginLeft: "40px",
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}>
                <div>
                  <span style={{ fontWeight: "700", color: "grey" }}>
                    Date :
                  </span>{" "}
                  <span style={{ color: "grey" }}>
                    {data && format(parseISO(data[0].createdAt), "dd/MM/yyyy")}-
                    {data && data[0].times}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "700", color: "grey" }}>
                    Seat :
                  </span>{" "}
                  <span style={{ color: "grey" }}>
                    {data &&
                      data[0].seats.map((item: string) => item).join(",")}
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "700", color: "grey" }}>
                    Cinemas :
                  </span>{" "}
                  <span style={{ color: "grey" }}>
                    {data && data[0].cinemas}
                  </span>
                </div>
              </div>
            </div>
            <div
              className=''
              style={{
                width: "40%",
                padding: "15px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}>
              {data &&
                data[0].total.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
            </div>
          </div>
          <div
            className=''
            style={{ display: "flex", borderBottom: "1px solid grey" }}>
            <div
              className=''
              style={{
                width: "60%",
                padding: "15px",
                borderRight: "1px solid grey",
                fontWeight: "700",
                color: "grey",
              }}>
              Subtotal
            </div>
            <div
              className=''
              style={{
                width: "40%",
                padding: "15px",
                fontWeight: "700",
                color: "grey",
              }}>
              {data &&
                data[0].total.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
            </div>
          </div>
          <div
            className=''
            style={{ display: "flex", borderBottom: "1px solid grey" }}>
            <div
              className=''
              style={{
                width: "60%",
                padding: "15px",
                borderRight: "1px solid grey",
                fontWeight: "700",
                color: "grey",
              }}>
              Payment Method
            </div>
            <div
              className=''
              style={{
                width: "40%",
                padding: "15px",
                fontWeight: "700",
                color: "grey",
              }}>
              Chuyển khoản trực tiếp
            </div>
          </div>
          <div className='' style={{ display: "flex" }}>
            <div
              className=''
              style={{
                width: "60%",
                padding: "15px",
                borderRight: "1px solid grey",
                fontWeight: "700",
                color: "grey",
              }}>
              Total
            </div>
            <div
              className=''
              style={{
                width: "40%",
                padding: "15px",
                fontWeight: "700",
                color: "grey",
              }}>
              {data &&
                data[0].total.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
