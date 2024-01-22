"use client";
import dynamic from "next/dynamic";

const LayoutClient = dynamic(
  () => import("../../components/client/LayoutClient"),
  {
    ssr: false,
  }
);
const Banner = dynamic(() => import("./_components/Banner"), {
  ssr: false,
});
const Details = dynamic(() => import("./_components/Details"), {
  ssr: false,
});

export default function Home(props: any) {
  return (
    <div style={{ background: "white" }}>
      <LayoutClient>
        <Banner />
        <Details id={props.searchParams.id} />
      </LayoutClient>
    </div>
  );
}
