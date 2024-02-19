"use client";
import React, { useState } from "react";

import {
  BellOutlined,
  CaretDownOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Dropdown, Popover, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import logo from "../../image/logo-white.png";
import { useTicketContext } from "@/store/UseContext";
import { useQuery, useQueryClient } from "react-query";
import { emailBooking, updateNotifyBooking } from "@/services/booking";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  parseISO,
} from "date-fns";
import { useLocalStorage } from "@/hook/useStorage";
import { useRouter } from "next/navigation";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link href={`/movielist?type=published`}>
        <p>Phim đang chiếu</p>
      </Link>
    ),
  },

  {
    key: "2",
    label: (
      <Link href={`/movielist?type=release_date`}>
        <p>Phim sắp chiếu</p>
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.antgroup.com'>
        Xuất chiếu đặc biệt
      </a>
    ),
  },
];

const HeaderClient: React.FC = () => {
  const [search, setsearch] = useState<boolean>(false);
  const [user] = useLocalStorage("user", {});
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data } = useQuery<typeBooking[]>("email", {
    queryFn: () => {
      return emailBooking({
        email: user.data[0].email,
      });
    },
  });

  async function handleClick(id: string, status: string) {
    if (status === "new") {
      let res = await updateNotifyBooking(id);
      if (res?.status === 0) {
        queryClient.invalidateQueries({
          queryKey: ["email"],
        });
        router.push(`/success?order_id=${id}`);
      }
    } else {
      router.push(`/success?order_id=${id}`);
    }
  }
  const content = (
    <div
      className=''
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        height: "300px",
        overflowY: "scroll",
        overflowX: "hidden",
        padding: "10px",
      }}>
      {data &&
        data.length &&
        data.map((item: any) => {
          return (
            <>
              <Badge
                dot={item.notify === "new" ? true : false}
                style={{ marginTop: "5px" }}>
                <div style={{ padding: "5px 5px" }}>
                  <div className='' style={{ display: "flex", gap: "5px" }}>
                    <Image
                      src={item.movies[0].poster_path1}
                      width={80}
                      height={80}
                      alt=''
                    />

                    {item.status === "paid" ? (
                      <p
                        onClick={() => handleClick(item.order_id, item.notify)}
                        style={{ color: "black" }}>
                        Bạn vừa đặt thành công phim {item.movie}.Chúc bạn xem
                        phim vui vẻ .
                      </p>
                    ) : (
                      <p
                        onClick={() => handleClick(item.order_id, item.notify)}
                        style={{ color: "black" }}>
                        Bạn chưa thanh toán thành công phim {item.movie}.
                      </p>
                    )}
                  </div>
                  <p
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}>
                    {item.createdAt ? (
                      <>
                        {data &&
                        differenceInDays(
                          new Date(),
                          parseISO(item.createdAt)
                        ) === 0 ? (
                          <>
                            {differenceInHours(
                              new Date(),
                              parseISO(item.createdAt)
                            ) === 0
                              ? `${differenceInMinutes(
                                  new Date(),
                                  parseISO(item.createdAt)
                                )} Phút trước`
                              : `${differenceInHours(
                                  new Date(),
                                  parseISO(item.createdAt)
                                )} Giờ ${
                                  differenceInMinutes(
                                    new Date(),
                                    parseISO(item.createdAt)
                                  ) % 60
                                } Phút trước`}
                          </>
                        ) : (
                          <>
                            <p>
                              {differenceInDays(
                                new Date(),
                                parseISO(item.createdAt)
                              )}{" "}
                              Ngày Trước
                            </p>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              </Badge>
            </>
          );
        })}
    </div>
  );

  console.log(data);
  return (
    <>
      <div
        className=''
        style={{
          padding: "25px",
          position: "fixed",
          borderBottom: "1px solid grey",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          top: "0",
          left: "0",
          zIndex: "1",
        }}>
        <div className='logo' style={{ marginLeft: "15px" }}>
          <Image src={logo} width={108} height={34} alt='logo' />
        </div>
        <div className='menu' style={{ display: "flex", gap: "25px" }}>
          <p style={{ color: "white" }}>Home</p>
          <Dropdown menu={{ items }}>
            <p style={{ color: "white" }}>
              <Space>
                Phim
                <CaretDownOutlined />
              </Space>
            </p>
          </Dropdown>
          <p style={{ color: "white" }}>Rạp vs Giá</p>
          <p style={{ color: "white" }}>Khuyến mãi</p>
          <p style={{ color: "white" }}>Tin tức</p>
          <p style={{ color: "white" }}>Giới thiệu </p>
          <p style={{ color: "white" }}>Liên hệ</p>
        </div>
        <div className='profile' style={{ display: "flex" }}>
          <SearchOutlined
            onClick={() => setsearch(true)}
            style={{
              fontSize: "24px",
              display: "block",
              marginRight: "25px",
              color: "white",
            }}
          />
          <Link href={"/account"}>
            <UserOutlined
              style={{
                fontSize: "24px",
                display: "block",
                marginRight: "25px",
                color: "white",
              }}
            />
          </Link>
          <Popover
            placement='bottomRight'
            title={"Thông báo"}
            style={{ overflow: "hidden" }}
            content={content}>
            <Badge
              count={
                data &&
                data.filter((item: any) => {
                  return item.notify === "new";
                }).length
              }>
              <BellOutlined
                style={{
                  fontSize: "24px",
                  display: "block",

                  color: "white",
                }}
              />
            </Badge>
          </Popover>
        </div>
      </div>
      <div
        className='search'
        style={
          search
            ? {
                position: "fixed",
                zIndex: "6",
                width: "100%",
                height: "100vh",
                left: "0",
                transition: ".5s",
                top: "0",
              }
            : {
                position: "fixed",
                zIndex: "6",
                width: "100%",
                height: "100vh",
                left: "0",
                transition: ".5s",
                top: "-100vh",
              }
        }>
        <div
          className=''
          onClick={() => setsearch(false)}
          style={{
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,.8)",
          }}></div>
        <div
          className=''
          style={{
            position: "absolute",
            top: "45%",
            left: "35%",
            background: "white",
          }}>
          <input
            type='text'
            style={{
              outline: "none",
              border: "none",
              padding: "10px 100px 10px 30px",
              fontSize: "20px",
            }}
            placeholder='Search...'
          />
          <button
            style={{ border: "none", background: "#d96c2c", padding: "20px" }}>
            <SearchOutlined style={{ color: "white", fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderClient;
