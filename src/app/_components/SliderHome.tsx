"use client";
import Image from "next/image";
import "./styles/sliderhome.css";
import anh1 from "../../image/anh1.jpg";
import anh2 from "../../image/anh2.jpg";
import anh3 from "../../image/anh3.jpg";
import anh4 from "../../image/anh4.jpg";
import under from "../../image/underline-heading-entire.png";
import arow from "../../image/arrow-watch-trailer.png";
import Slider from "react-slick";
import { CaretRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
export default function SliderHome() {
  const images = [anh1, anh2, anh3, anh4];
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [tralerSlide, settralerSlide] = useState<boolean>(false);
  const sliderRef: any = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, settings.autoplaySpeed);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,

    beforeChange: (oldIndex: any, newIndex: any) => {
      setSelectedSlide(newIndex);
    },
    customPaging: function (i: any) {
      return (
        <div className='' style={{ position: "relative" }}>
          <div
            onClick={() => {
              setSelectedSlide(i);
            }}
            className=''
            style={
              i === selectedSlide
                ? {
                    position: "absolute",
                    width: "100%",
                    height: "150px",
                    top: "0",
                    border: "3px solid white",
                  }
                : {
                    position: "absolute",
                    width: "100%",
                    height: "150px",
                    top: "0",
                  }
            }>
            <div
              className='player'
              onClick={() => settralerSlide(true)}
              style={
                i === selectedSlide
                  ? {
                      position: "absolute",
                      top: "40%",
                      left: "42%",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#d96c2c",
                    }
                  : {
                      position: "absolute",
                      top: "40%",
                      left: "42%",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "white",
                    }
              }>
              <CaretRightOutlined
                style={
                  i === selectedSlide
                    ? { fontSize: "20px", color: "white" }
                    : { fontSize: "20px", color: "black" }
                }
              />
            </div>
          </div>

          <div>
            <Image src={images[i]} width={273} height={150} alt='oi' />
          </div>
        </div>
      );
    },

    appendDots: (dots: any) => (
      <div className='config-slick'>
        <div className='slide-home-dots-hiden'>
          <a className='slide-home-dots-a'>Trailers</a>
          <Image className='slide-home-dots-image' src={arow} alt='' />
          <Flex justify='center'>
            <ul className='slide-home-dots'>{dots}</ul>
          </Flex>
        </div>
      </div>
    ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='slider-home' style={{ position: "relative" }}>
      <Slider ref={sliderRef} {...settings}>
        <div className='slider-home-item'>
          <div className='slider-home-item-title'>
            <div className='slider-home-item-title-pos'>
              <div className='slider-home-item-title-date'>
                <span>Coming in</span>
                <Title style={{ color: "white " }}>July 2023</Title>
                <Image src={under} width={150} alt='' />
              </div>
              <div className='slider-home-item-title-date-movie'>
                <p className='font-slider'>Action Movie</p>
                <h1>THE WITCHER SERSON 2</h1>
                <p className='slider-home-item-title-date-movie-des'>
                  Writen and Directed by Kenvin Lord / German 2023{" "}
                </p>
                <div className='slider-home-item-title-date-movie-ticket'>
                  <button>Get Ticket</button>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-home-item-image'>
            <Image src={anh1} alt='Slide 1' />
          </div>
        </div>
        <div className='slider-home-item'>
          <div className='slider-home-item-title'>
            <div className='slider-home-item-title-pos'>
              <div className='slider-home-item-title-date'>
                <span>Coming in</span>
                <Title style={{ color: "white " }}>July 2023</Title>
                <Image src={under} width={150} alt='' />
              </div>
              <div className='slider-home-item-title-date-movie'>
                <p className='font-slider'>Action Movie</p>
                <h1>THE WITCHER SERSON 2</h1>
                <p className='slider-home-item-title-date-movie-des'>
                  Writen and Directed by Kenvin Lord / German 2023{" "}
                </p>
                <div className='slider-home-item-title-date-movie-ticket'>
                  <button>Get Ticket</button>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-home-item-image'>
            <Image src={anh2} alt='Slide 1' />
          </div>
        </div>
        <div className='slider-home-item'>
          <div className='slider-home-item-title'>
            <div className='slider-home-item-title-pos'>
              <div className='slider-home-item-title-date'>
                <span>Coming in</span>
                <Title style={{ color: "white " }}>July 2023</Title>
                <Image src={under} width={150} alt='' />
              </div>
              <div className='slider-home-item-title-date-movie'>
                <p className='font-slider'>Action Movie</p>
                <h1>THE WITCHER SERSON 2</h1>
                <p className='slider-home-item-title-date-movie-des'>
                  Writen and Directed by Kenvin Lord / German 2023{" "}
                </p>
                <div className='slider-home-item-title-date-movie-ticket'>
                  <button>Get Ticket</button>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-home-item-image'>
            <Image src={anh3} alt='Slide 1' />
          </div>
        </div>
        <div className='slider-home-item'>
          <div className='slider-home-item-title'>
            <div className='slider-home-item-title-pos'>
              <div className='slider-home-item-title-date'>
                <span>Coming in</span>
                <Title style={{ color: "white " }}>July 2023</Title>
                <Image src={under} width={150} alt='' />
              </div>
              <div className='slider-home-item-title-date-movie'>
                <p className='font-slider'>Action Movie</p>
                <h1>THE WITCHER SERSON 2</h1>
                <p className='slider-home-item-title-date-movie-des'>
                  Writen and Directed by Kenvin Lord / German 2023{" "}
                </p>
                <div className='slider-home-item-title-date-movie-ticket'>
                  <button>Get Ticket</button>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-home-item-image'>
            <Image src={anh4} alt='Slide 1' />
          </div>
        </div>

        {/* <div className='slider-home-item'>
          <div className='' style={{ position: "relative" }}>
            <div
              className=''
              style={{
                position: "absolute",
                top: "200px",
                zIndex: "2",
                right: "200px",
              }}>
              <span style={{ color: "white", fontSize: "14px" }}>
                Coming in
              </span>
              <Title style={{ color: "white " }}>July 2023</Title>
              <Image src={under} width={150} alt='' />
            </div>
            <div
              className=''
              style={{
                position: "absolute",
                top: "270px",
                zIndex: "2",
                right: "290px",
              }}>
              <p
                style={{
                  color: "#d96c2c",
                  fontSize: "40px",
                  fontFamily: "Covered By Your Grace !important",
                }}
                className='font-slider'>
                Action Movie
              </p>
              <Title
                style={{
                  color: "white ",
                  fontSize: "70px",
                  letterSpacing: "5px",
                  fontWeight: "700",
                }}>
                THE WITCHER SERSON 2
              </Title>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "30px",
                }}>
                Writen and Directed by Kenvin Lord / German 2023{" "}
              </p>
              <div
                className=''
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}>
                <button
                  style={{
                    padding: "17px 50px",
                    background: "#d96c2c",
                    fontSize: "15px",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                  }}>
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
          <div className='' style={{ background: "#000" }}>
            <Image
              src={anh2}
              style={{
                mixBlendMode: "luminosity",
                objectFit: "cover",
                width: "100%",
                height: "110vh",
                opacity: "0.5",
              }}
              alt='Slide 1'
            />
          </div>
        </div>
        <div className='slider-home-item'>
          <div className='' style={{ position: "relative" }}>
            <div
              className=''
              style={{
                position: "absolute",
                top: "200px",
                zIndex: "2",
                right: "200px",
              }}>
              <span style={{ color: "white", fontSize: "14px" }}>
                Coming in
              </span>
              <Title style={{ color: "white " }}>July 2023</Title>
              <Image src={under} width={150} alt='' />
            </div>
            <div
              className=''
              style={{
                position: "absolute",
                top: "270px",
                zIndex: "2",
                right: "290px",
              }}>
              <p
                style={{
                  color: "#d96c2c",
                  fontSize: "40px",
                  fontFamily: "Covered By Your Grace !important",
                }}
                className='font-slider'>
                Action Movie
              </p>
              <Title
                style={{
                  color: "white ",
                  fontSize: "70px",
                  letterSpacing: "5px",
                  fontWeight: "700",
                }}>
                THE WITCHER SERSON 2
              </Title>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "30px",
                }}>
                Writen and Directed by Kenvin Lord / German 2023{" "}
              </p>
              <div
                className=''
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}>
                <button
                  style={{
                    padding: "17px 50px",
                    background: "#d96c2c",
                    fontSize: "15px",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                  }}>
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
          <div className='' style={{ background: "#000" }}>
            <Image
              src={anh3}
              style={{
                mixBlendMode: "luminosity",
                objectFit: "cover",
                width: "100%",
                height: "110vh",
                opacity: "0.5",
              }}
              alt='Slide 1'
            />
          </div>
        </div>
        <div className='slider-home-item'>
          <div className='' style={{ position: "relative" }}>
            <div
              className=''
              style={{
                position: "absolute",
                top: "200px",
                zIndex: "2",
                right: "200px",
              }}>
              <span style={{ color: "white", fontSize: "14px" }}>
                Coming in
              </span>
              <Title style={{ color: "white " }}>July 2023</Title>
              <Image src={under} width={150} alt='' />
            </div>
            <div
              className=''
              style={{
                position: "absolute",
                top: "270px",
                zIndex: "2",
                right: "290px",
              }}>
              <p
                style={{
                  color: "#d96c2c",
                  fontSize: "40px",
                  fontFamily: "Covered By Your Grace !important",
                }}
                className='font-slider'>
                Action Movie
              </p>
              <Title
                style={{
                  color: "white ",
                  fontSize: "70px",
                  letterSpacing: "5px",
                  fontWeight: "700",
                }}>
                THE WITCHER SERSON 2
              </Title>
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "30px",
                }}>
                Writen and Directed by Kenvin Lord / German 2023{" "}
              </p>
              <div
                className=''
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}>
                <button
                  style={{
                    padding: "17px 50px",
                    background: "#d96c2c",
                    fontSize: "15px",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                  }}>
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
          <div className='' style={{ background: "#000" }}>
            <Image
              src={anh4}
              style={{
                mixBlendMode: "luminosity",
                objectFit: "cover",
                width: "100%",
                height: "110vh",
                opacity: "0.5",
              }}
              alt='Slide 1'
            />
          </div>
        </div> */}
      </Slider>
      {tralerSlide ? (
        <div
          className='traler-container'
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            padding: "80px",
            background: "rgba(0,0,0,.8)",
            zIndex: 5,
          }}>
          <div
            className=''
            onClick={() => settralerSlide(false)}
            style={{ float: "right", cursor: "pointer", marginBottom: "20px" }}>
            <CloseCircleOutlined style={{ color: "red", fontSize: "30px" }} />
          </div>
          <YouTube
            videoId={"yjRbtqvEJPg"} // The YouTube video ID
            key={"AIzaSyAXpO60lQbL9eDA_LlpRURLT2HgyqwS4cc"}
            style={{ alignSelf: "stretch", height: "524px" }}
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {
                autoplay: 1, // Tự động phát video khi nạp
                controls: 1, // Tắt control
                mute: 1, // Tắt tiếng
                showinfo: 0, // Vô hiệu hóa thông tin video
                rel: 0,
                start: 10,
                fs: 0,
              },
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
