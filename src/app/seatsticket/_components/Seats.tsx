import { useTicketContext } from "@/store/UseContext";
import { useEffect, useState } from "react";
import { CheckOut } from "./CheckOut";
import io from "socket.io-client";
import { toast } from "react-toastify";
import { Popover } from "antd";
const socketio = io("ws://localhost:8000");

export default function Seats(id: any) {
  const [selected, setselected] = useState<any>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const context: any = useTicketContext();

  const row = ["A", "B", "C", "D", "E", "F"];
  const [seats, setSeats] = useState<any>([]);

  const handleSeatClick = (seatId: string) => {
    if (context.state.seats <= selected.length) {
      toast.success("ban da chon du so ghe");
    } else {
      if (!selected.includes(seatId)) {
        const updatedSeats = seats[0].timeSlots[0].seats.map((seat: any) => {
          setselected([...selected, seatId]);
          if (seat.seats === seatId) {
            setTotal(total + seat.price);
            return { ...seat, active: "status" };
          }
          return seat;
        });

        setSeats([
          {
            ...seats[0],
            timeSlots: [{ ...seats[0].timeSlots[0], seats: updatedSeats }],
          },
        ]);
      }
    }
  };

  useEffect(() => {
    const socket = io("ws://localhost:8000");
    socket.emit("getSeats", {
      id: id.id,
      time: id.time,
    });
    socket.on("seat", (receivedSeats) => {
      setSeats(receivedSeats);
    });
    socket.on("bookingseatnew", (receivedComments) => {
      let arrcheck: any = [];
      setSeats((prev: any) => {
        if (prev.length > 0 && prev[0]) {
          const updatedSeats = prev[0].timeSlots[0].seats.map((seat: any) => {
            if (receivedComments.includes(seat.seats)) {
              if (seat.active === "status") {
                setselected((prevchild: any) => {
                  let arr = prevchild.filter(
                    (item: string) => item !== seat.seats
                  );
                  return arr;
                });

                if (!arrcheck.includes(seat.seats)) {
                  setIsCreateModalOpen(false);

                  arrcheck.push(seat.seats);
                  toast.warning(`ghe ${seat.seats} da co nguoi vuadat`);
                }

                return { ...seat, active: "active" };
              }
              return { ...seat, active: "active" };
            }
            return seat;
          });

          return [
            {
              ...prev[0],
              timeSlots: [
                {
                  ...prev[0].timeSlots[0],
                  seats: updatedSeats,
                },
              ],
            },
          ];
        } else {
          console.log("Không có dữ liệu để cập nhật.");
          return prev;
        }
      });
    });
    socket.on("bookingseatunpaid", (receivedComments) => {
      let arrcheck: any = [];
      setSeats((prev: any) => {
        if (prev.length > 0 && prev[0]) {
          console.log(receivedComments);
          const updatedSeats = prev[0].timeSlots[0].seats.map((seat: any) => {
            if (receivedComments.includes(seat.seats)) {
              return { ...seat, active: "no_active" };
            }
            return seat;
          });

          return [
            {
              ...prev[0],
              timeSlots: [
                {
                  ...prev[0].timeSlots[0],
                  seats: updatedSeats,
                },
              ],
            },
          ];
        } else {
          console.log("Không có dữ liệu để cập nhật.");
          return prev;
        }
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  function handleSeatStatus(name: string) {
    let arr = selected.filter((item: string) => item !== name);
    const updatedSeats = seats[0].timeSlots[0].seats.map((seat: any) => {
      setselected([...selected, name]);
      if (seat.seats === name) {
        setTotal(total - seat.price);
        return { ...seat, active: "no_active" };
      }
      return seat;
    });
    setSeats([
      {
        ...seats[0],
        timeSlots: [{ ...seats[0].timeSlots[0], seats: updatedSeats }],
      },
    ]);
    setselected(arr);
  }

  function handleSeats() {
    if (false) {
      // alert(`ban con ${seat - selected.length} nua`);
    } else {
      socketio.emit("bookingseat", seats);
      let arr = seats[0].timeSlots[0].seats.map((seat: any) => {
        return seat.active === "status" ? { ...seat, active: "active" } : seat;
      });
      setSeats([
        {
          ...seats[0],
          timeSlots: [{ ...seats[0].timeSlots[0], seats: arr }],
        },
      ]);
    }
  }

  return (
    <div
      style={{
        padding: "100px 150px",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}>
      <div
        className=''
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundImage:
            "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/seat-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
          opacity: ".08",
          mixBlendMode: "luminosity",
        }}></div>
      <div className='' style={{ width: "65%" }}>
        <div
          className=''
          style={{
            width: "100%",
            padding: "10px 0",
            background: "#d96c2c",
            borderRadius: "20px",
          }}>
          <h2 style={{ textAlign: "center", color: "white" }}>Màn hình</h2>
        </div>
        <div
          className='seat-layout-container'
          style={{ margin: "0 auto", position: "relative" }}>
          <div className='seats' style={{ position: "relative" }}>
            <div className='seat-row'>
              {seats &&
                seats.length &&
                seats[0].timeSlots[0].seats.map((item: any, index: any) => {
                  const isSelected = item.active === "active";
                  const status = item.active === "status";
                  if (isSelected) {
                    return (
                      <>
                        <Popover
                          style={{ width: "50px" }}
                          content={
                            <>
                              <p>
                                {item.price.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </p>
                            </>
                          }
                          title={item.place}
                          trigger='hover'>
                          {" "}
                          <div
                            key={index}
                            className='seat'
                            style={{
                              backgroundImage:
                                "url('https://cinestar.com.vn/catalog/view/theme/default/images/single-chair.png')",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center -52px",
                              backgroundSize: "cover",
                            }}>
                            {item.seats}
                          </div>
                        </Popover>
                      </>
                    );
                  } else if (status) {
                    return (
                      <>
                        <Popover
                          style={{ width: "50px" }}
                          content={
                            <>
                              <p>
                                {item.price.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </p>
                            </>
                          }
                          title={item.place}
                          trigger='hover'>
                          <div
                            key={index}
                            onClick={() => handleSeatStatus(item.seats)}
                            className={`seat ${isSelected ? "selected" : ""} ${
                              status ? "currently-selected" : ""
                            } `}
                            style={{
                              backgroundImage:
                                "url('https://cinestar.com.vn/catalog/view/theme/default/images/single-chair.png')",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center -104px",
                              backgroundSize: "cover",
                            }}>
                            {item.seats}
                          </div>
                        </Popover>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <Popover
                          style={{ width: "50px" }}
                          content={
                            <>
                              <p>
                                {item.price.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </p>
                            </>
                          }
                          title={item.place}
                          trigger='hover'>
                          <div
                            key={index}
                            onClick={() => handleSeatClick(item.seats)}
                            className={`seat ${isSelected ? "selected" : ""} ${
                              status ? "currently-selected" : ""
                            } `}
                            style={{
                              backgroundImage:
                                "url('https://cinestar.com.vn/catalog/view/theme/default/images/single-chair.png')",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                              backgroundSize: "cover",
                            }}>
                            {item.seats}
                          </div>
                        </Popover>
                      </>
                    );
                  }
                })}
            </div>
          </div>
          <div
            className='row-seat'
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              position: "absolute",
              left: "-50px",
              top: "28px",
            }}>
            {seats &&
              seats.length &&
              row.map((item, index) => {
                if (index + 1 <= seats[0].timeSlots[0].seats.length / 10)
                  return (
                    <>
                      <p
                        style={{
                          padding: "10px 15px",
                          fontWeight: "700",
                        }}>
                        {item}
                      </p>
                    </>
                  );
              })}
          </div>
        </div>
        <div
          className=''
          style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          <div
            className=''
            style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              className=''
              style={{
                width: "50px",
                height: "50px",
                backgroundImage:
                  "url('https://cinestar.com.vn/catalog/view/theme/default/images/single-chair.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left -46px",
              }}></div>
            <p style={{ fontWeight: "700" }}>Đã chọn</p>
          </div>
          <div
            className=''
            style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              className=''
              style={{
                width: "50px",
                height: "50px",
                backgroundImage:
                  "url('https://cinestar.com.vn/catalog/view/theme/default/images/single-chair.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left -92px",
              }}></div>
            <p style={{ fontWeight: "700" }}>Đang chọn</p>
          </div>
          <div
            className=''
            style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              className=''
              style={{
                width: "50px",
                height: "50px",
                backgroundImage:
                  "url('https://cinestar.com.vn/catalog/view/theme/default/images/single-chair.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left 0px",
              }}></div>
            <p style={{ fontWeight: "700" }}>Chưa chọn</p>
          </div>
        </div>
      </div>
      <div
        className=''
        style={{ width: "35%", padding: "0 40px", position: "relative" }}>
        <div
          className=''
          style={{
            width: "360px",
            boxShadow: "0px 10px 40px 0px rgba(6, 22, 58, 0.1)",
            padding: "20px",
          }}>
          <h4
            style={{
              color: "#333333",
              borderBottom: "2px solid grey",
              paddingBottom: "15px",
            }}>
            Thông tin đặt chỗ
          </h4>
          <div
            className=''
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}>
            <div className='' style={{ display: "flex", gap: "15px" }}>
              <p style={{ fontWeight: 700 }}>Seats:</p>
              <p style={{ color: "grey" }}>
                {selected.length &&
                  selected.map((item: any) => item).join(" , ")}
              </p>
            </div>
          </div>
        </div>
        <div
          className=''
          style={{ padding: "20px", background: "#737373", width: "360px" }}>
          <div
            className=''
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}>
            <p>Tổng tiền </p>
            <p>
              {total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            if (context.state.seats > selected.length) {
              toast.success(
                `ban con ${context.state.seats - selected.length} nua`
              );
            } else {
              let count = 0;
              Object.entries(context.state.food).map(([key, value]: any) => {
                return (count += Number(value.price));
              });
              setTotal(total + count);
              setIsCreateModalOpen(true);
            }
          }}
          style={{
            border: "none",
            width: "360px",
            fontSize: "16px",
            color: "#ffffff",
            padding: "14px 0",
            background: "#90BA3E",
            marginTop: "20px",
          }}>
          Thanh toán
        </button>
      </div>
      <CheckOut
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
        handleSeats={handleSeats}
        total={total}
        seleted={selected}
        screeningId={id.id}
      />
    </div>
  );
}
