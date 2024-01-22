import Image from "next/image";
import Slider from "react-slick";
import "../styles/ui.slidermovielist.css";
import { BookingTicket } from "./BookingTicket";
import { useState } from "react";
import { useQuery } from "react-query";
import { getMovieScreenings } from "@/services/screenings";

export default function SliderMovieList({
  colums,
  data,
}: {
  colums: number;
  data: typeMovie[];
}) {
  const [open, setopen] = useState<boolean>(false);
  const [screening, setScreenings] = useState<typeScreenings[]>([]);
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: colums,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
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
  function handleClose() {
    setopen(false);
  }
  async function handleTicket(id: string) {
    let data = await getMovieScreenings(id);
    if (data) {
      setScreenings(data);
    }
    setopen(true);
  }
  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.length &&
          data.map((item) => {
            return (
              <>
                <div className=''>
                  <div className='hover-item'>
                    <div
                      className='image'
                      style={{ width: "100%", height: "389px" }}>
                      <img
                        src={item.poster_path1}
                        style={{ width: "100%" }}
                        alt=''
                      />
                    </div>
                    <div
                      className='info'
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "30px",
                      }}>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "white",
                          marginBottom: "10px",
                        }}>
                        Comedy / {item.times}
                      </p>
                      <h3 style={{ color: "white", marginBottom: "15px" }}>
                        {item.title}
                      </h3>
                      <button
                        onClick={() => handleTicket(item._id)}
                        style={{
                          padding: "10px 20px",
                          background: "white",
                          fontSize: "13px",
                          color: "grey",
                          border: "none",
                          fontWeight: "600",
                        }}>
                        Get Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Slider>
      {open ? (
        <BookingTicket open={open} data={screening} handleClose={handleClose} />
      ) : (
        ""
      )}
    </div>
  );
}
