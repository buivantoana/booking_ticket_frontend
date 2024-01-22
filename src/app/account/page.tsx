import dynamic from "next/dynamic";
import Banner from "../movie/_components/Banner";
import { Account } from "./_components/index";

const LayoutClient = dynamic(
  () => import("../../components/client/LayoutClient"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div style={{ background: "white" }}>
      <LayoutClient>
        <Banner />
        <Account />
      </LayoutClient>
    </div>
  );
}
