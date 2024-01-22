"use client";
import LayoutClient from "@/components/client/LayoutClient";
import {
  SliderHome,
  About,
  ListMovie,
  TopMovie,
  FeedBack,
  UpComming,
  Wrapper,
} from "./_components/index";
export default function Home() {
  return (
    <div>
      <LayoutClient>
        <SliderHome />
        <About />
        <ListMovie />
        <TopMovie />
        <FeedBack />
        <UpComming />
        {/* <Wrapper /> */}
      </LayoutClient>
    </div>
  );
}
