"use client";

import { emailBooking } from "@/services/booking";
import { useTicketContext } from "@/store/UseContext";
import { InfoCircleFilled } from "@ant-design/icons";
import { Form, Input, Space, Tag } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";

export function Custumer() {
  const [active, setActive] = useState(1);
  const context: any = useTicketContext();
  const { data, isLoading, isError } = useQuery<typeBooking[]>("email", {
    queryFn: () => emailBooking(context && { email: context.state.user.email }),
  });
  const columns: ColumnsType<typeBooking> = [
    {
      title: "Order_id",
      dataIndex: "order_id",
      key: "order_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Movie",
      dataIndex: "movie",
      key: "movie",
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render(value, record, index) {
        return (
          <>
            <p> {format(parseISO(value), " HH:mm:ss - dd/MM/yyyy")}</p>
          </>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "seats",
      key: "seats",
      dataIndex: "seats",
      render: (_, { seats }) => (
        <>
          {seats.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Detail",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <Link href={`/success?order_id=${record.order_id}`}>Detail</Link>
        </Space>
      ),
    },
  ];
  function handlelogout() {
    localStorage.removeItem("user");
    context.dispatch({
      type: "LOGOUT",
      payload: {
        ...context.state,
      },
    });
  }

  return (
    <>
      <div className='' style={{ display: "flex", gap: "20px" }}>
        <div
          className=''
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={() => setActive(1)}
            style={
              active === 1
                ? {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "18px",
                    border: "none",
                    background: "#d96c2c",
                  }
                : {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                    border: "none",
                    background: "#f1f1f1",
                  }
            }>
            Order
          </button>
          <button
            onClick={() => setActive(2)}
            style={
              active === 2
                ? {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "18px",
                    border: "none",
                    background: "#d96c2c",
                  }
                : {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                    border: "none",
                    background: "#f1f1f1",
                  }
            }>
            Account Detail
          </button>
          <button
            onClick={() => setActive(3)}
            style={
              active === 3
                ? {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "18px",
                    border: "none",
                    background: "#d96c2c",
                  }
                : {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                    border: "none",
                    background: "#f1f1f1",
                  }
            }>
            Reset Password
          </button>
          <button
            onClick={handlelogout}
            style={
              active === 4
                ? {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "18px",
                    border: "none",
                    background: "#d96c2c",
                  }
                : {
                    width: "311px",
                    height: "49px",
                    textAlign: "left",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "18px",
                    border: "none",
                    background: "#f1f1f1",
                  }
            }>
            Logout
          </button>
        </div>
        <div className='' style={{ width: "100%" }}>
          {active === 1 ? (
            <>
              {data && !data[0] ? (
                <div
                  className=''
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "30px",
                    background: "#F6F5F8",
                    borderTop: "3px solid #d96c2c",
                  }}>
                  <InfoCircleFilled style={{ color: "#d96c2c" }} />
                  <p style={{ color: "grey" }}>
                    Chưa có đơn hàng nào ?{" "}
                    <span style={{ color: "#d96c2c" }}>
                      Nhấp vào đây đặt vé của bạn
                    </span>
                  </p>
                </div>
              ) : (
                <Table columns={columns} dataSource={data} />
              )}
            </>
          ) : (
            ""
          )}
          {active === 2 ? (
            <div
              className=''
              style={{
                border: "1px solid grey",
                display: "flex",
                justifyContent: "center",
              }}>
              <Form
                name='basic'
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 730, padding: "10px 0" }}
                initialValues={{ remember: true }}
                layout='vertical'
                autoComplete='off'>
                <div className='' style={{ display: "flex", gap: "30px" }}>
                  <Form.Item
                    label='Firts Name'
                    name='fistname'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "350px" }} />
                  </Form.Item>
                  <Form.Item
                    label='Last Name'
                    name='lastname'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "350px" }} />
                  </Form.Item>
                </div>
                <Form.Item
                  label='FullName'
                  name='fullname'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "730px" }} />
                </Form.Item>
                <div className='' style={{ display: "flex", gap: "30px" }}>
                  <Form.Item
                    label='Phone'
                    name='phone'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "350px" }} />
                  </Form.Item>
                  <Form.Item
                    label='Email'
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "350px" }} />
                  </Form.Item>
                </div>
                <Form.Item
                  label='Address'
                  name='address'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "730px" }} />
                </Form.Item>
                <button
                  style={{
                    padding: "14px 30px",
                    background: "#d96c2c",
                    fontSize: "15px",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                  }}>
                  Save Change
                </button>
              </Form>
            </div>
          ) : (
            ""
          )}
          {active === 3 ? (
            <div
              className=''
              style={{
                border: "1px solid grey",
                display: "flex",
                justifyContent: "center",
              }}>
              <Form
                name='basic'
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 730, padding: "10px 0" }}
                initialValues={{ remember: true }}
                layout='vertical'
                autoComplete='off'>
                <Form.Item
                  label='Email'
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "730px" }} />
                </Form.Item>
                <Form.Item
                  label='Current password (leave blank to leave unchanged)'
                  name='currentpassword'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "730px" }} />
                </Form.Item>
                <Form.Item
                  label='New password (leave blank to leave unchanged)'
                  name='newpassword'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "730px" }} />
                </Form.Item>
                <Form.Item
                  label='Confirm new password'
                  name='confirmnewpassword'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "730px" }} />
                </Form.Item>

                <button
                  style={{
                    padding: "14px 30px",
                    background: "#d96c2c",
                    fontSize: "15px",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                  }}>
                  Save Change
                </button>
              </Form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
