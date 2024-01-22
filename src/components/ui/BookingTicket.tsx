"use client";

import { useTicketContext } from "@/store/UseContext";
import { Button, Steps, theme } from "antd";
import { format } from "date-fns";
import { vi } from "date-fns/locale/vi";
import { useEffect, useState } from "react";
import { First } from "./steps/First";
import { Last } from "./steps/Last";
import { Second } from "./steps/Second";
import { useRouter } from "next/navigation";

export function BookingTicket({
  open,
  handleClose,
  data: datascreening,
}: {
  open: boolean;
  handleClose: () => void;
  data: typeScreenings[];
}) {
  const router = useRouter();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [checkTime, setCheckTime] = useState({
    times: "",
    index: 0,
    id: "",
    screeningId: "",
  });

  let [ticket, setTicket] = useState({ total: 0, ticket: 0 });
  const [seleted, setselected] = useState<{ index: number; date: string }>({
    index: 0,
    date: format(new Date(), `dd-MM-yyyy`, { locale: vi }),
  });
  const [isaddress, setisaddress] = useState<string>("HN");
  const [dataScreenings, setdataScreenings] = useState<typeScreenings[]>([]);
  const [food, setFood] = useState<{
    index: { name: string; price: string; quantity: number; slug: string };
  } | null>(null);

  const context: any = useTicketContext();

  function handleSeleted(index: number, date: any[]) {
    setselected({ index: index, date: date[1] });
  }
  function handleAddress(slug: string) {
    setisaddress(slug);
  }
  function handleTimes(
    time: string,
    index: number,
    id: string,
    screeningId: string
  ) {
    setCheckTime({
      times: time,
      index: index,
      id: id,
      screeningId: screeningId,
    });
  }
  function handleChangeTicket(e: number) {
    setTicket({ total: 100 * Number(e), ticket: Number(e) });
  }

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleQuantityChange = (record: typeFood, value?: number) => {
    if (value === 0 && food !== null) {
      const keyToDelete = record._id;
      const newObj: any = Object.fromEntries(
        Object.entries(food).filter(([key]) => key !== keyToDelete)
      );

      setFood(newObj);
    } else {
      setFood((prev: any) => {
        return {
          ...prev,
          [record._id]: {
            name: record.name,
            quantity: value,
            price: record.price,
            slug: record.slug,
          },
        };
      });
    }
  };

  const steps = [
    {
      title: "Chọn ngày",
      content: (
        <First
          seleted={seleted}
          handleSeleted={handleSeleted}
          handleAddress={handleAddress}
          dataScreenings={dataScreenings}
          checkTime={checkTime}
          handleTimes={handleTimes}
          isaddress={isaddress}
        />
      ),
    },

    {
      title: "Chọn vé",
      content: (
        <>
          <Second ticket={ticket} handleChangeTicket={handleChangeTicket} />
        </>
      ),
    },
    {
      title: "Đồ ăn",
      content: (
        <>
          <Last handleQuantityChange={handleQuantityChange} />
        </>
      ),
    },
  ];

  useEffect(() => {
    let arr = datascreening.filter((item) => {
      return item.cinemas[0].slug === isaddress;
    });

    setdataScreenings(arr);
  }, [isaddress]);

  return (
    <div
      className='ticket'
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: "3",
      }}>
      <div
        className=''
        onClick={handleClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,.8)",
        }}></div>
      <div
        className=''
        style={{
          width: "1200px",
          padding: "50px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: " translate(-50%, -50%)",
          background: "#fdfcf0",
        }}>
        <Steps
          current={current}
          items={steps.map((item) => ({ key: item.title, title: item.title }))}
        />
        <div
          style={{
            lineHeight: "20px",
            padding: "20px",
            color: token.colorTextTertiary,
            backgroundColor: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: `1px dashed ${token.colorBorder}`,
            marginTop: 16,
            overflow: "hidden",
          }}>
          {steps[current].content}
        </div>
        <div style={{ marginTop: 24 }}>
          {current === 0 && (
            <Button
              style={{ background: "#d96c2c", color: "white" }}
              disabled={checkTime.times === "" ? true : false}
              onClick={() => {
                context.dispatch({
                  type: "FIRST",
                  payload: {
                    ...context.state,
                    movie: dataScreenings[0].movies[0].title,
                    cinemas: datascreening[checkTime.index].cinemas[0].name,
                    time: checkTime.times,
                    date: seleted.date,
                  },
                });

                next();
              }}>
              Tiếp tục
            </Button>
          )}
          {current === 1 && (
            <Button
              style={{ background: "#d96c2c", color: "white" }}
              disabled={ticket.ticket === 0 ? true : false}
              onClick={() => {
                context.dispatch({
                  type: "SECOND",
                  payload: {
                    ...context.state,
                    seats: ticket.ticket,
                    total: ticket.total,
                  },
                });

                next();
              }}>
              Tiếp tục
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              style={{ background: "#d96c2c", color: "white" }}
              onClick={() => {
                if (food === null || !Object.keys(food)[0]) {
                  context.dispatch({
                    type: "LAST",
                    payload: {
                      ...context.state,
                      movie_id: checkTime.id,
                    },
                  });
                  setTimeout(
                    () =>
                      router.push(
                        `/seatsticket?id=${checkTime.id}&time=${checkTime.times}`,
                        {
                          scroll: false,
                        }
                      ),
                    1000
                  );
                } else {
                  context.dispatch({
                    type: "LAST",
                    payload: {
                      ...context.state,
                      food: food,
                      movie_id: checkTime.id,
                    },
                  });
                  setTimeout(
                    () =>
                      router.push(
                        `/seatsticket?id=${checkTime.screeningId}&time=${checkTime.times}`,
                        {
                          scroll: false,
                        }
                      ),
                    1000
                  );
                }
              }}>
              Chọn ghế
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Quay lại
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
