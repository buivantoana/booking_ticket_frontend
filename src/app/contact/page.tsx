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

const Contact = dynamic(() => import("./_components/Contact"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <LayoutClient>
        <Banner />
        <Contact />
      </LayoutClient>
    </div>
  );
}
