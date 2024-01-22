"use client";
import Item from "antd/es/list/Item";
import { addDays, format, isSameDay } from "date-fns";
import { vi } from "date-fns/locale/vi";

type props = {
  seleted: { index: number; date: string };
  handleSeleted: (index: number, date: any[]) => void;
  handleAddress: (slug: string) => void;
  dataScreenings: typeScreenings[];
  checkTime: { times: string; index: number };
  handleTimes: (
    time: string,
    index: number,
    id: string,
    screeningId: string
  ) => void;
  isaddress: string;
};
export function First({
  seleted,
  handleSeleted,
  handleAddress,
  dataScreenings,
  checkTime,
  handleTimes,
  isaddress,
}: props) {
  const address = [
    { address: "Hà Nội", slug: "HN" },
    { address: "Đà Nẵng", slug: "DN" },
    { address: "Hồ Chí Minh", slug: "HCM" },
  ];
  const currentDate = new Date();
  const daysOfWeek = Array.from({ length: 8 }, (_, index) =>
    addDays(currentDate, index)
  );
  const formattedDaysOfWeek = daysOfWeek.map((day, index) => {
    if (index === 0) {
      return `Hôm nay:${format(day, `dd-MM-yyyy`, { locale: vi })}`;
    }
    if (index === 1) {
      return `Ngày mai:${format(day, `dd-MM-yyyy`, { locale: vi })}`;
    }

    return format(day, "EEEE:dd-MM-yyyy", { locale: vi });
  });

  return (
    <div className='' style={{ height: "400px", overflowY: "scroll" }}>
      <div
        className=''
        style={{ borderBottom: "1px solid black", padding: "20px 0" }}>
        <h2>Chọn ngày</h2>
        <div
          className=''
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "15px",
            flexWrap: "wrap",
          }}>
          {formattedDaysOfWeek &&
            formattedDaysOfWeek.length &&
            formattedDaysOfWeek.map((item, index) => {
              let date = item.split(":");

              return (
                <div
                  onClick={() => handleSeleted(index, date)}
                  style={
                    seleted.index === index
                      ? {
                          padding: "6px",
                          color: "white",
                          border: "4px solid black",
                          borderRadius: "5px",
                          width: "max-content",
                          background: "#d96c2c",
                        }
                      : {
                          padding: "6px",
                          color: "grey",
                          border: "4px solid grey",
                          borderRadius: "5px",
                          width: "max-content",
                        }
                  }
                  key={item}>
                  <p>{date[0]}</p>
                  <p>{date[1]}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className=''
        style={{ borderBottom: "1px solid black", padding: "20px 0" }}>
        <h2 style={{ marginTop: "15px " }}>Địa Điểm</h2>
        <div
          className=''
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "15px",
          }}>
          {address &&
            address.length &&
            address.map((item, index) => {
              return (
                <div
                  onClick={() => handleAddress(item.slug)}
                  style={
                    isaddress === item.slug
                      ? {
                          padding: "6px",
                          color: "white",

                          borderRadius: "5px",
                          width: "max-content",
                          background: "black",
                        }
                      : {
                          padding: "6px",
                          color: "black",

                          borderRadius: "5px",
                          width: "max-content",
                          background: "transparent",
                        }
                  }
                  key={item.address}>
                  <p>{item.address}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className='' style={{ padding: "20px 0" }}>
        <h2 style={{ marginTop: "15px " }}>Chọn rạp</h2>

        <div
          className=''
          style={{
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            marginTop: "15px",
          }}>
          {dataScreenings &&
            dataScreenings.length &&
            dataScreenings.map((item, index) => {
              if (seleted.date.trim() === item.date.trim()) {
                return (
                  <div key={item._id}>
                    <h3 style={{ color: "#636363", margin: "15px 0" }}>
                      {item.cinemas[0].name}
                    </h3>
                    <div style={{ display: "flex", gap: "20px" }}>
                      {item.timeSlots.map((itemchild) => {
                        return (
                          <p
                            onClick={() =>
                              handleTimes(
                                itemchild.time,
                                index,
                                item.movies[0]._id,
                                item._id
                              )
                            }
                            style={
                              checkTime.times === itemchild.time &&
                              checkTime.index === index
                                ? {
                                    padding: "10px",
                                    background: "black",
                                    color: "white",
                                  }
                                : {
                                    padding: "10px",
                                    border: "1px solid grey",
                                  }
                            }
                            key={itemchild}>
                            {itemchild.time}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
