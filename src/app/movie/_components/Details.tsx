import SliderMovieList from "@/components/ui/SliderMovieList";
import { getCast } from "@/services/cast";
import { getOneMovie, getSimilarMovie } from "@/services/movie";
import { CaretRightOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Image as ImageAtd } from "antd";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import YouTube from "react-youtube";
export default function Details({ id }: { id: string }) {
  const [tralerSlide, settralerSlide] = useState<boolean>(false);
  const { data, isLoading, isError }: any = useQuery<typeMovie>("movie", {
    queryFn: () => getOneMovie(id),
  });
  const { data: cast } = useQuery<any>("cast", {
    queryFn: () => getCast(data && data.movie_id),
  });
  const { data: similar } = useQuery<any>("similar", {
    queryFn: () => getSimilarMovie(data && data.genders[0]._id),
  });
  console.log(similar);
  return (
    <div style={{ padding: "100px 150px", position: "relative" }}>
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
      <div className='' style={{ position: "relative" }}>
        <div
          className=''
          style={{ display: "flex", justifyContent: "space-between" }}>
          <div className=''>
            <h2 style={{ fontSize: "34px", marginBottom: "10px" }}>
              {data && data.title}
            </h2>
            <p style={{ color: "grey" }}>
              {data && data.genders[0].name} / {data && data.genders[1].name} /{" "}
              {data && data.genders[2].name} / {data && data.times}
            </p>
          </div>
          <div className=''>
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
        <div
          className=''
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}>
          <div className='detail-left'>
            <ImageAtd.PreviewGroup
              items={
                data &&
                data.length && [
                  data && data.poster_path1,
                  data && data.poster_path2,
                ]
              }>
              <ImageAtd
                width={367}
                height={517}
                src={data && data.poster_path1}
              />
            </ImageAtd.PreviewGroup>
          </div>
          <div className='detail-right'>
            <div
              className=''
              onClick={() => settralerSlide(true)}
              style={{ position: "relative" }}>
              <Image
                src={(data && data.backdrop_path) || ""}
                width={773}
                height={517}
                style={{ objectFit: "cover" }}
                alt=''
              />
              <div
                className='anmation-detail'
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: " translate(-50%, -50%)",
                  width: "100px",
                  height: "100px",

                  background: "#d96c2c",
                  borderRadius: "50%",
                  border: "10px solid rgba(0,0,0,0.4)",
                }}></div>
              <div
                className=''
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: " translate(-50%, -50%)",
                }}>
                {" "}
                <CaretRightOutlined
                  style={{ color: "white", fontSize: "50px" }}
                />
              </div>
            </div>
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
                  style={{
                    float: "right",
                    cursor: "pointer",
                    marginBottom: "20px",
                  }}>
                  <CloseCircleOutlined
                    style={{ color: "red", fontSize: "30px" }}
                  />
                </div>
                <YouTube
                  videoId={data && data.traler}
                  key={"AIzaSyAXpO60lQbL9eDA_LlpRURLT2HgyqwS4cc"}
                  style={{ alignSelf: "stretch", height: "524px" }}
                  opts={{
                    height: "100%",
                    width: "100%",
                    playerVars: {
                      autoplay: 1,
                      controls: 1,
                      mute: 1,
                      showinfo: 0,
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
        </div>
        <div
          className=''
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "140px",
            borderBottom: "1px solid grey",
            paddingBottom: "40px",
          }}>
          <div
            className=''
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
            <div className='' style={{ display: "flex", gap: "50px" }}>
              <p style={{ fontWeight: "700" }}>Director:</p>
              <p style={{ color: "grey" }}>Christine Eve</p>
            </div>
            <div className='' style={{ display: "flex", gap: "50px" }}>
              <p style={{ fontWeight: "700" }}>Writer:</p>
              <p style={{ color: "grey" }}>Aleesha Rose</p>
            </div>
            <div className='' style={{ display: "flex", gap: "50px" }}>
              <p style={{ fontWeight: "700" }}>Rating:</p>
              <p style={{ color: "grey" }}>PG-13</p>
            </div>
          </div>
          <div
            className=''
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className='' style={{ display: "flex", gap: "50px" }}>
              <p style={{ fontWeight: "700" }}>Preimier:</p>
              <p style={{ color: "grey" }}>{data && data.release_date}</p>
            </div>
            <div className='' style={{ display: "flex", gap: "50px" }}>
              <p style={{ fontWeight: "700" }}>Time:</p>
              <p style={{ color: "grey" }}>{data && data.times}</p>
            </div>
          </div>
        </div>
        <div className=''>
          <h2 style={{ margin: "20px 0" }}>Top Cast</h2>
          <div
            className=''
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "30px",
            }}>
            {cast &&
              cast?.data.cast.slice(0, 8) &&
              cast?.data.cast.slice(0, 8).length &&
              cast?.data.cast.slice(0, 8).map((item: any) => {
                return (
                  <>
                    <div
                      className=''
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                      }}>
                      <Image
                        width={100}
                        height={100}
                        style={{ objectFit: "cover", borderRadius: "50%" }}
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        alt=''
                      />
                      <div className=''>
                        <h3>{item.name}</h3>
                        <p style={{ color: "grey" }}>as Eleven</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div className=''>
          <h2 style={{ margin: "40px 0 30px 0" }}>Story Line</h2>
          <p style={{ color: "grey", lineHeight: "1.86rem" }}>
            {data && data.overview}
          </p>
        </div>
        <div className=''>
          <h2 style={{ margin: "40px 0 30px 0" }}>More Movies Like This</h2>
          <SliderMovieList
            data={
              similar &&
              similar.length &&
              similar.filter((item: any) => item.movie_id !== data.movie_id)
            }
            colums={1}
          />
        </div>
      </div>
    </div>
  );
}
