"use client";
import LayoutClient from "@/components/client/LayoutClient";
import Banner from "../movie/_components/Banner";
import Success from "./_components/Success";

export default function Home(props: any) {
  console.log(props);
  return (
    <div>
      <LayoutClient>
        <Banner />
        <Success id={props.searchParams} />
      </LayoutClient>
    </div>
  );
}
