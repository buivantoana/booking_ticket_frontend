"use client";
import dynamic from "next/dynamic";

const LayoutClient = dynamic(
  () => import("../../components/client/LayoutClient"),
  {
    ssr: false,
  }
);
const Banner = dynamic(() => import("../movie/_components/Banner"), {
  ssr: false,
});

const News = dynamic(() => import("./_components/News"), {
  ssr: false,
});

export default function Home() {
  return (
    <div style={{ background: "white" }}>
      <LayoutClient>
        <Banner />
        <News />
      </LayoutClient>
    </div>
  );
}
