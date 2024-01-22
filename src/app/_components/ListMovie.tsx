"use client";

import SliderMovieList from "@/components/ui/SliderMovieList";
import "./styles/listmovie.css";
import Image from "next/image";
import logo from "../../image/Screenshot_2023-12-21-removebg-preview.png";
import { useQuery } from "react-query";
import { getMovie } from "@/services/movie";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";

export default function ListMovie() {
  const { data, isLoading, isError } = useQuery("movie", {
    queryFn: () => getMovie(),
  });

  return (
    <div
      style={{
        width: "100%",
        padding: "20px 0",
        position: "relative",
      }}>
      <div
        className=''
        style={{
          width: "100%",
          height: "550px",
          position: "absolute",
          top: "0",
          left: "0",
          background: "black",
          zIndex: 0,
        }}></div>
      <div className='' style={{ position: "relative", zIndex: 1 }}>
        <Flex
          vertical={false}
          justify='center'
          style={{
            paddingTop: "50px",
          }}>
          <Image
            src={logo}
            width={100}
            height={70}
            style={{ margin: "0 auto" }}
            alt='logo'
          />
        </Flex>
        <p style={{ textAlign: "center", color: "#d96c2c", margin: "8px 0" }}>
          Watch New Movies
        </p>
        <Title
          level={2}
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "50px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}>
          Movie Now Playing
        </Title>
      </div>

      <div className='slider-list' style={{ padding: "20px" }}>
        <SliderMovieList data={data} colums={5} />
      </div>
    </div>
  );
}
