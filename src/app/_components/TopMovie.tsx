import Image from "next/image";
import logo from "../../image/Screenshot_2023-12-21-removebg-preview.png";
import anh1 from "../../image/item2.jpg";
import { BookOutlined, FieldTimeOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "./styles/topmovie.css";

export default function TopMovie() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='top-movie' style={{ padding: "30px 0 50px 0" }}>
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
          Checkout Top Movies
        </p>
        <h2
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "50px",
            marginBottom: "40px",
          }}>
          Top Movies in Theater
        </h2>
      </div>
      <Slider {...settings}>
        <div className=''>
          <div className='hover-top'>
            <div className='hover-top-bg'></div>
            <div className='top-left' style={{ position: "relative" }}>
              <Image src={anh1} alt='' />
            </div>
            <div className='top-right'>
              <p>
                <BookOutlined style={{ color: "#d96c2c" }} /> Adventure / Crime
              </p>
              <p>
                <FieldTimeOutlined style={{ color: "#d96c2c" }} /> 180 Mins
              </p>
              <h3>The Way Of Water</h3>
              <button>Get Tickets</button>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='hover-top'>
            <div className='hover-top-bg'></div>
            <div className='top-left' style={{ position: "relative" }}>
              <Image src={anh1} alt='' />
            </div>
            <div className='top-right'>
              <p>
                <BookOutlined style={{ color: "#d96c2c" }} /> Adventure / Crime
              </p>
              <p>
                <FieldTimeOutlined style={{ color: "#d96c2c" }} /> 180 Mins
              </p>
              <h3>The Way Of Water</h3>
              <button>Get Tickets</button>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='hover-top'>
            <div className='hover-top-bg'></div>
            <div className='top-left' style={{ position: "relative" }}>
              <Image src={anh1} alt='' />
            </div>
            <div className='top-right'>
              <p>
                <BookOutlined style={{ color: "#d96c2c" }} /> Adventure / Crime
              </p>
              <p>
                <FieldTimeOutlined style={{ color: "#d96c2c" }} /> 180 Mins
              </p>
              <h3>The Way Of Water</h3>
              <button>Get Tickets</button>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='hover-top'>
            <div className='hover-top-bg'></div>
            <div className='top-left' style={{ position: "relative" }}>
              <Image src={anh1} alt='' />
            </div>
            <div className='top-right'>
              <p>
                <BookOutlined style={{ color: "#d96c2c" }} /> Adventure / Crime
              </p>
              <p>
                <FieldTimeOutlined style={{ color: "#d96c2c" }} /> 180 Mins
              </p>
              <h3>The Way Of Water</h3>
              <button>Get Tickets</button>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
