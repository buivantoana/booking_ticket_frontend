"use client";
import dynamic from "next/dynamic";

const LayoutClient = dynamic(
  () => import("../../../components/client/LayoutClient"),
  {
    ssr: false,
  }
);
const Banner = dynamic(() => import("../../movie/_components/Banner"), {
  ssr: false,
});

const DetailPost = dynamic(() => import("./_components/DetailPost"), {
  ssr: false,
});

export default function Home(props: any) {
  return (
    <div style={{ background: "white" }}>
      <LayoutClient>
        <Banner />
        <DetailPost id={props.params.id} />
      </LayoutClient>
    </div>
  );
}
