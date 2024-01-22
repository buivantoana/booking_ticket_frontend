import { getPost } from "@/services/post";
import {
  CalendarOutlined,
  CommentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Flex, Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { useQuery } from "react-query";

export default function News() {
  const { data } = useQuery<typePost[]>("post", {
    queryFn: () => getPost(),
  });

  return (
    <div style={{ padding: "80px 150px", position: "relative" }}>
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

      <Flex gap={30} style={{ position: "relative" }} vertical={false}>
        <Col span={15}>
          <Row style={{ gap: "30px" }}>
            {data &&
              data.length &&
              data.map((item) => {
                return (
                  <>
                    <Col span={24}>
                      <Image src={item.image} alt='' />
                      <Title level={2} style={{ margin: "10px 0" }}>
                        {item.title}
                      </Title>
                      <Flex vertical={false} gap={20}>
                        <Col>
                          <Flex vertical={false} gap={5}>
                            <CalendarOutlined style={{ color: "#d96c2c" }} />
                            <p style={{ color: "grey" }}>March 23, 2023</p>
                          </Flex>
                        </Col>
                        <Col>
                          <Flex vertical={false} gap={5}>
                            <UserOutlined style={{ color: "#d96c2c" }} />
                            <p style={{ color: "grey" }}>Duno</p>
                          </Flex>
                        </Col>
                      </Flex>
                      <p
                        style={{
                          margin: "20px 0",
                          fontSize: "18px",
                          color: "grey",
                          lineHeight: "2",
                        }}>
                        {item.desc}
                      </p>
                      <Link href={`/news/${item._id}`}>
                        <button
                          style={{
                            padding: "14px 30px",
                            background: "#d96c2c",
                            fontSize: "15px",
                            color: "white",
                            border: "none",
                            fontWeight: "600",
                            marginTop: "10px",
                          }}>
                          Read More
                        </button>
                      </Link>
                    </Col>
                  </>
                );
              })}
          </Row>
        </Col>
        <Col span={9}>
          <div className='' style={{ background: "#f3f3f3", padding: "30px" }}>
            <Title level={3}>Latest Post</Title>
            <Row style={{ gap: "15px", marginTop: "10px" }}>
              {data &&
                data.length &&
                data.map((item) => {
                  return (
                    <>
                      <Col span={24}>
                        <Flex vertical={false} gap={20}>
                          <Col>
                            <img
                              src={item.image}
                              style={{
                                width: "70px",
                                height: "70px",
                                objectFit: "cover",
                              }}
                              alt=''
                            />
                          </Col>
                          <Col>
                            <Col>
                              <Flex vertical={false} gap={5}>
                                <UserOutlined style={{ color: "#d96c2c" }} />
                                <p style={{ color: "grey" }}>Duno</p>
                              </Flex>
                            </Col>
                            <Link href={`/news/${item._id}`}>
                              <Title
                                level={4}
                                style={{ fontSize: "18px", fontWeight: "700" }}>
                                {item.title.length > 60
                                  ? item.title.slice(0, 60) + "..."
                                  : item.title}
                              </Title>
                            </Link>
                          </Col>
                        </Flex>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </div>
        </Col>
      </Flex>
    </div>
  );
}
