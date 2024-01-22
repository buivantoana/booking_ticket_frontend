import { getMovie } from "@/services/movie";
import { FieldTimeOutlined, TagsFilled } from "@ant-design/icons";
import Image from "next/image";
import { useQuery } from "react-query";

export default function ListMovie() {
  const { data, isLoading, isError } = useQuery<typeMovie[]>("movie", {
    queryFn: () => getMovie(),
  });

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
          {data &&
            data.length &&
            data.map((item: any) => {
              return (
                <>
                  {" "}
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
                          Watch Tralers
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
