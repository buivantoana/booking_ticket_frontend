import Image from "next/image";

import icon1 from "../../image/icon-footer.png";
import icon2 from "../../image/icon-footer2.png";
import icon3 from "../../image/icon-footer3.png";
export default function Wrapper() {
  return (
    <div style={{ display: "flex", marginTop: "70px" }}>
      <div
        className='hover-wrapper'
        style={{
          width: "490px",
          height: "371px",
          position: "relative",
          border: "1px solid white",
          overflow: "hidden",
        }}>
        <div
          className='line-wraper'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "490px",
            height: "371px",
            backgroundColor: "black",
          }}>
          {" "}
          <div
            className='hover-child'
            style={{
              width: "490px",
              height: "371px",
              backgroundImage:
                "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/image-1-film-feature-home-1.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: ".5",
              mixBlendMode: "luminosity",
              transition: ".4s",
            }}></div>
        </div>
        <div
          className=''
          style={{
            position: "absolute",
            zIndex: 1,
            top: "100px",
            left: "110px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}>
          <Image src={icon1} width={90} height={90} alt='' />
          <h2 style={{ color: "white", fontSize: "35px", textAlign: "center" }}>
            Top 6 Movies in<br></br> Theaters
          </h2>
        </div>
      </div>
      <div
        className='hover-wrapper'
        style={{
          width: "490px",
          height: "371px",
          position: "relative",
          border: "1px solid white",
          overflow: "hidden",
        }}>
        <div
          className='line-wraper'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "490px",
            height: "371px",
            backgroundColor: "#d96c2c",
          }}>
          {" "}
          <div
            className='hover-child'
            style={{
              width: "490px",
              height: "371px",
              backgroundImage:
                "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/image-2-film-feature-home-1.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: ".5",
              mixBlendMode: "luminosity",
              transition: ".4s",
            }}></div>
        </div>
        <div
          className=''
          style={{
            position: "absolute",
            zIndex: 1,
            top: "100px",
            left: "110px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}>
          <Image src={icon2} width={90} height={90} alt='' />
          <h2 style={{ color: "white", fontSize: "35px", textAlign: "center" }}>
            Watch Coming<br></br> Soon Movies
          </h2>
        </div>
      </div>
      <div
        className='hover-wrapper'
        style={{
          width: "490px",
          height: "371px",
          position: "relative",
          border: "1px solid white",
          overflow: "hidden",
        }}>
        <div
          className='line-wraper'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "490px",
            height: "371px",
            backgroundColor: "black",
          }}>
          {" "}
          <div
            className='hover-child'
            style={{
              width: "490px",
              height: "371px",
              backgroundImage:
                "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/image-3-film-feature-home-1.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: ".5",
              mixBlendMode: "luminosity",
              transition: ".4s",
            }}></div>
        </div>
        <div
          className=''
          style={{
            position: "absolute",
            zIndex: 1,
            top: "100px",
            left: "110px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}>
          <Image src={icon3} width={90} height={90} alt='' />
          <h2 style={{ color: "white", fontSize: "35px", textAlign: "center" }}>
            News & Articles<br></br> from the Posts
          </h2>
        </div>
      </div>
    </div>
  );
}
