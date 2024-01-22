"use client";
import Image from "next/image";
import logo from "../../image/logo-white.png";
import {
  GoogleOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export default function FooterClient() {
  return (
    <div style={{ background: "black", padding: "20px 150px" }}>
      <div
        className=''
        style={{
          width: "100%",
          padding: "30px 0",
          borderBottom: "1px solid grey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div className=''>
          <Image src={logo} width={108} height={34} alt='' />
        </div>
        <div
          className=''
          style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <p style={{ color: "grey" }}>Help / Privacy Policy</p>
          <div className='' style={{ display: "flex", gap: "20px" }}>
            <div
              className=''
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#2F2F2F",
              }}>
              <TwitterOutlined style={{ color: "white" }} />
            </div>
            <div
              className=''
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#2F2F2F",
              }}>
              <InstagramOutlined style={{ color: "white" }} />
            </div>
            <div
              className=''
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#2F2F2F",
              }}>
              <GoogleOutlined style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>

      <div className='' style={{ display: "flex", marginTop: "65px" }}>
        <div className='' style={{ width: "33%" }}>
          <h3 style={{ color: "white", lineHeight: "2" }}>
            Buy movie tickets easily with<br></br> Aovis system nationwide
          </h3>
          <button
            style={{
              padding: "10px 30px",
              background: "#d96c2c",
              fontSize: "15px",
              color: "white",
              border: "none",
              fontWeight: "600",
              marginTop: "20px",
            }}>
            Get Your Ticket
          </button>
        </div>
        <div
          className=''
          style={{
            width: "33%",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div className=''>
            <div
              className='button-footer'
              style={{ position: "relative", width: "max-content" }}>
              <button>Movies</button>
              <div
                className=''
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "14px",
                  height: "1px",
                  background: "#d96c2c",
                }}></div>
              <div
                className=''
                style={{
                  position: "absolute",
                  bottom: 5,
                  right: -6,
                  width: "13px",
                  height: "2px",
                  background: "#d96c2c",
                  transform: "rotate(90deg)",
                }}></div>
            </div>
            <ul
              style={{
                margin: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}>
              <li>
                <p style={{ color: "grey" }}>Action</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>Adventure</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>Animation</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>Comedy</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>Crime</p>
              </li>
            </ul>
          </div>
          <div className=''>
            <div
              className='button-footer'
              style={{ position: "relative", width: "max-content" }}>
              <button>Links</button>
              <div
                className=''
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "14px",
                  height: "1px",
                  background: "#d96c2c",
                }}></div>
              <div
                className=''
                style={{
                  position: "absolute",
                  bottom: 5,
                  right: -6,
                  width: "13px",
                  height: "2px",
                  background: "#d96c2c",
                  transform: "rotate(90deg)",
                }}></div>
            </div>
            <ul
              style={{
                margin: "20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}>
              <li>
                <p style={{ color: "grey" }}>About</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>My Accout</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>News</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>Events</p>
              </li>
              <li>
                <p style={{ color: "grey" }}>Contact</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='' style={{ width: "33%", marginLeft: "100px" }}>
          <div
            className='button-footer'
            style={{ position: "relative", width: "max-content" }}>
            <button>News Letter</button>
            <div
              className=''
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "14px",
                height: "1px",
                background: "#d96c2c",
              }}></div>
            <div
              className=''
              style={{
                position: "absolute",
                bottom: 5,
                right: -6,
                width: "13px",
                height: "2px",
                background: "#d96c2c",
                transform: "rotate(90deg)",
              }}></div>
          </div>
          <p style={{ color: "grey", marginLeft: "20px", marginTop: "20px" }}>
            Subscribe to Leitmotif newsletter<br></br> this very day.
          </p>
        </div>
      </div>
    </div>
  );
}
