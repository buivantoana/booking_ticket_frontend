import { getMovie, getMovieScroll } from "@/services/movie";
import {
  CloseCircleOutlined,
  FieldTimeOutlined,
  TagsFilled,
} from "@ant-design/icons";
import Image from "next/image";
import React, { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import YouTube from "react-youtube";

export default function ListMovie(id: any) {
  const [tralerSlide, settralerSlide] = useState<boolean>(false);
  const [idVideo, setIdVideo] = useState<string>("");
  let { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      "scrollmovie",
      async ({ pageParam = 0 }) => {
        let responseData = await getMovieScroll(
          id.id.searchParams.type,
          pageParam
        );

        return responseData;
      },
      {
        getPreviousPageParam: (firstPage: any) => {
          return firstPage.previousId ?? undefined;
        },
        getNextPageParam: (lastPage: any) => {
          return lastPage.nextId ?? undefined;
        },
      }
    );
  console.log(data);
  return (
    <>
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
            opacity: ".15",
            mixBlendMode: "luminosity",
          }}></div>

        <div
          className=''
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "29px",
          }}>
          {data?.pages &&
            data.pages.map((page: any) => (
              <React.Fragment key={page.nextId}>
                {page.data.map((item: any) => (
                  <>
                    <div
                      className=''
                      style={{
                        width: "370px",
                        height: "407px",
                        position: "relative",
                        marginBottom: "15px",
                      }}>
                      <div
                        className='hover-img-list'
                        style={{
                          position: "relative",
                          transition: ".4s",
                          transform: "translateY(0)",
                        }}>
                        <Image
                          src={item.backdrop_path}
                          width={370}
                          height={246}
                          style={{ objectFit: "cover" }}
                          alt=''
                        />
                      </div>

                      <div
                        className=''
                        style={{
                          margin: " -20px 20px 0 20px",
                          position: "relative",
                          background: "white",
                          padding: "35px",
                          boxShadow: " 0px 5px 10px 0px rgba(0, 0, 0, 0.1)",
                        }}>
                        <h2>
                          {item.title.length > 17
                            ? item.title.slice(0, 17) + "..."
                            : item.title}
                        </h2>
                        <div
                          className=''
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "15px",
                          }}>
                          <div
                            className=''
                            style={{ display: "flex", gap: "8px" }}>
                            <TagsFilled style={{ color: "#d96c2c" }} />
                            <p style={{ fontSize: "14px", color: "grey" }}>
                              {item.genders[0].name}
                            </p>
                          </div>
                          <div
                            className=''
                            style={{ display: "flex", gap: "8px" }}>
                            <FieldTimeOutlined style={{ color: "#d96c2c" }} />
                            <p style={{ fontSize: "14px", color: "grey" }}>
                              {item.times}
                            </p>
                          </div>
                        </div>
                        <div
                          className=''
                          style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "15px",
                          }}>
                          {id.id.searchParams.type === "release_date" ? (
                            <button
                              style={{
                                padding: "10px 20px",
                                background: "#F3F3F3",
                                fontSize: "13px",
                                color: "#737373",
                                border: "none",
                                fontWeight: "700",
                                lineHeight: "1.3",
                              }}>
                              Get Ticket
                            </button>
                          ) : (
                            ""
                          )}
                          <button
                            onClick={() => {
                              setIdVideo(item.tralers);
                              settralerSlide(true);
                            }}
                            style={{
                              padding: "10px 20px",
                              background: "#F3F3F3",
                              fontSize: "13px",
                              color: "#737373",
                              border: "none",
                              fontWeight: "700",
                              lineHeight: "1.3",
                            }}>
                            Watch Tralers
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </React.Fragment>
            ))}
        </div>
        <div
          className=''
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}>
          <button
            style={{
              padding: "10px 20px",
              color: "black",
              background: "transparent",
              border: "1px solid black",
              borderRadius: "10px",
              textAlign: "center",
            }}
            onClick={() => fetchNextPage()}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load Newer"
              : "Nothing more to load"}
          </button>
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
              <CloseCircleOutlined style={{ color: "red", fontSize: "30px" }} />
            </div>
            <YouTube
              videoId={idVideo} // The YouTube video ID
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
    </>
  );
}
