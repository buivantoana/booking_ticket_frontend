import Image from "next/image";
import logo from "../../image/Screenshot_2023-12-21-removebg-preview.png";
import {
  EnvironmentOutlined,
  FieldTimeOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

export default function UpComming() {
  return (
    <div style={{ position: "relative", padding: "50px" }}>
      <div
        className=''
        style={{
          height: "100%",
          width: "100%",
          backgroundImage:
            "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/bg-shape-events.png')",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundPosition: "top left",
          opacity: "0.1",
          backgroundRepeat: "no-repeat",
        }}></div>
      <div className=''>
        <div
          className=''
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
          }}>
          <Image
            src={logo}
            width={100}
            height={70}
            style={{ margin: "0 auto" }}
            alt='logo'
          />
        </div>
        <p style={{ textAlign: "center", color: "grey", margin: "8px 0" }}>
          Upcoming Events
        </p>
        <h2
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "50px",
            marginBottom: "40px",
          }}>
          Register Yourself now<br></br> for the Events
        </h2>
      </div>

      <div
        className=''
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}>
        <div
          className='upcomming'
          style={{
            width: "370px",
            height: "430px",

            overflow: "hidden",
            position: "relative",
          }}>
          <div
            className=''
            style={{
              width: "370px",
              height: "430px",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundImage:
                "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/Event06.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
          <div
            className='bg-upcomming'
            style={{
              width: "370px",
              height: "430px",
              position: "absolute",
              top: 0,
              left: 0,
              background: "#000",
              opacity: ".4",
              transition: ".4s",
            }}></div>
          <div
            className='info-upcomming'
            style={{
              width: "340px",
              position: "absolute",
              top: "250px",
              padding: "40px 30px 0 30px",
              transition: ".4s",
            }}>
            <button
              style={{
                background: "#d96c2c",
                color: "white",
                padding: "7px 10px",
                border: "none",
              }}>
              26 Mar,2025
            </button>
            <h2 style={{ color: "white", marginTop: "15px" }}>
              Best Magical Movies Ever Made
            </h2>
            <div
              className=''
              style={{ display: "flex", gap: "10px", marginTop: "35px" }}>
              <FieldTimeOutlined
                style={{ color: "#d96c2c", fontWeight: "700" }}
              />
              <div className=''>
                <p style={{ color: "white" }}>14:00 - 18:00 </p>
                <p style={{ color: "grey" }}>Timing</p>
              </div>
            </div>
            <div
              className=''
              style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <EnvironmentOutlined style={{ color: "#d96c2c" }} />
              <div className=''>
                <p style={{ color: "white" }}>New York</p>
                <p style={{ color: "grey" }}>Location</p>
              </div>
            </div>
            <div
              className=''
              style={{
                display: "flex",
                justifyContent: "right",
                marginTop: "80px",
              }}>
              <RightCircleOutlined
                style={{ color: "white", fontSize: "40px" }}
              />
            </div>
          </div>
        </div>
        <div
          className='upcomming'
          style={{
            width: "370px",
            height: "430px",

            overflow: "hidden",
            position: "relative",
          }}>
          <div
            className=''
            style={{
              width: "370px",
              height: "430px",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundImage:
                "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/Event06.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
          <div
            className='bg-upcomming'
            style={{
              width: "370px",
              height: "430px",
              position: "absolute",
              top: 0,
              left: 0,
              background: "#000",
              opacity: ".4",
              transition: ".4s",
            }}></div>
          <div
            className='info-upcomming'
            style={{
              width: "340px",
              position: "absolute",
              top: "250px",
              padding: "40px 30px 0 30px",
              transition: ".4s",
            }}>
            <button
              style={{
                background: "#d96c2c",
                color: "white",
                padding: "7px 10px",
                border: "none",
              }}>
              26 Mar,2025
            </button>
            <h2 style={{ color: "white", marginTop: "15px" }}>
              Best Magical Movies Ever Made
            </h2>
            <div
              className=''
              style={{ display: "flex", gap: "10px", marginTop: "35px" }}>
              <FieldTimeOutlined
                style={{ color: "#d96c2c", fontWeight: "700" }}
              />
              <div className=''>
                <p style={{ color: "white" }}>14:00 - 18:00 </p>
                <p style={{ color: "grey" }}>Timing</p>
              </div>
            </div>
            <div
              className=''
              style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <EnvironmentOutlined style={{ color: "#d96c2c" }} />
              <div className=''>
                <p style={{ color: "white" }}>New York</p>
                <p style={{ color: "grey" }}>Location</p>
              </div>
            </div>
            <div
              className=''
              style={{
                display: "flex",
                justifyContent: "right",
                marginTop: "80px",
              }}>
              <RightCircleOutlined
                style={{ color: "white", fontSize: "40px" }}
              />
            </div>
          </div>
        </div>
        <div
          className='upcomming'
          style={{
            width: "370px",
            height: "430px",

            overflow: "hidden",
            position: "relative",
          }}>
          <div
            className=''
            style={{
              width: "370px",
              height: "430px",
              position: "absolute",
              top: 0,
              left: 0,
              backgroundImage:
                "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/Event06.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
          <div
            className='bg-upcomming'
            style={{
              width: "370px",
              height: "430px",
              position: "absolute",
              top: 0,
              left: 0,
              background: "#000",
              opacity: ".4",
              transition: ".4s",
            }}></div>
          <div
            className='info-upcomming'
            style={{
              width: "340px",
              position: "absolute",
              top: "250px",
              padding: "40px 30px 0 30px",
              transition: ".4s",
            }}>
            <button
              style={{
                background: "#d96c2c",
                color: "white",
                padding: "7px 10px",
                border: "none",
              }}>
              26 Mar,2025
            </button>
            <h2 style={{ color: "white", marginTop: "15px" }}>
              Best Magical Movies Ever Made
            </h2>
            <div
              className=''
              style={{ display: "flex", gap: "10px", marginTop: "35px" }}>
              <FieldTimeOutlined
                style={{ color: "#d96c2c", fontWeight: "700" }}
              />
              <div className=''>
                <p style={{ color: "white" }}>14:00 - 18:00 </p>
                <p style={{ color: "grey" }}>Timing</p>
              </div>
            </div>
            <div
              className=''
              style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <EnvironmentOutlined style={{ color: "#d96c2c" }} />
              <div className=''>
                <p style={{ color: "white" }}>New York</p>
                <p style={{ color: "grey" }}>Location</p>
              </div>
            </div>
            <div
              className=''
              style={{
                display: "flex",
                justifyContent: "right",
                marginTop: "80px",
              }}>
              <RightCircleOutlined
                style={{ color: "white", fontSize: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
