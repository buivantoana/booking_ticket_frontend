import Image from "next/image";
import banner from "../../../image/banner.jpg";
import dots from "../../../image/dots.jpg";
import { CaretRightOutlined, RightOutlined } from "@ant-design/icons";

export default function Banner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "330px",
        background: "white",
        marginBottom: "20px",
      }}>
      <div className='' style={{}}>
        <Image
          src={banner}
          height={300}
          style={{ objectFit: "cover", width: "100%" }}
          alt=''
        />
        <Image src={dots} style={{ marginTop: "10px" }} alt='' />
      </div>
      <div
        className=''
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          textAlign: "center",
          transform: " translate(-50%, -50%)",
        }}>
        <p style={{ color: "white" }}>
          Home{" "}
          <CaretRightOutlined style={{ color: "grey", fontSize: "15px" }} />{" "}
          Wrong Turns Part 2
        </p>
        <h1 style={{ fontSize: "50px", color: "white", marginTop: "10px" }}>
          Wrong Turns Part 2
        </h1>
      </div>
    </div>
  );
}
