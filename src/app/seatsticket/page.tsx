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
const Seats = dynamic(() => import("./_components/Seats"), {
  ssr: false,
});

export default function Home(props: any) {
  
  return (
    <div style={{ background: "white" }}>
      <LayoutClient>
        <Banner />
        <Seats id={props.searchParams} />
      </LayoutClient>
    </div>
  );
}
