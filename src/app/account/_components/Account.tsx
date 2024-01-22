"use client";
import { Tabs } from "antd";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Custumer } from "./Custumer";
import { useTicketContext } from "@/store/UseContext";

export default function Account() {
  const context: any = useTicketContext();

  return (
    <div style={{ position: "relative" }}>
      <div
        className=''
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundImage:
            "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/background-movie-playing-home-3.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
          opacity: ".05",
          mixBlendMode: "luminosity",
        }}></div>
      {!Object.keys(context.state.user)[0] ? (
        <div className='' style={{ padding: "70px 485px" }}>
          <Tabs
            defaultActiveKey='1'
            centered
            style={{ borderBottom: "none" }}
            items={new Array(2).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label:
                  Number(id) === 1 ? (
                    <p style={{ color: "black", fontSize: "20px" }}>Login</p>
                  ) : (
                    <p style={{ color: "black", fontSize: "20px" }}>Register</p>
                  ),
                key: id,
                children: <>{Number(id) === 1 ? <SignIn /> : <SignUp />}</>,
              };
            })}
          />
        </div>
      ) : (
        <div className='account-detail' style={{ padding: "70px 150px",position:"relative" }}>
          <Custumer />
        </div>
      )}
    </div>
  );
}
