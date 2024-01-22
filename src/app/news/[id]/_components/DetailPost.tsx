import { getOnePost, getPost } from "@/services/post";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Flex, Image, Row } from "antd";
import Title from "antd/es/typography/Title";
import { useQuery } from "react-query";

export default function DetailPost({ id }: any) {
  const { data: similar } = useQuery<typePost[]>("similarpost", {
    queryFn: () => getPost(),
  });
  const { data: post } = useQuery<typePost>("post", {
    queryFn: () => getOnePost(id),
  });
  const createMarkup: any = (htmlContent: string): { __html: string } => {
    return { __html: htmlContent };
  };
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

      <div className='' style={{ position: "relative" }}>
        {" "}
        <Flex gap={30} vertical={false}>
          <Col span={15}>
            <Row style={{ gap: "30px" }}>
              <Col span={24}>
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    post && post.content
                  )}></div>
              </Col>
            </Row>
          </Col>
          <Col span={9}>
            <div
              className=''
              style={{ background: "#f3f3f3", padding: "30px" }}>
              <Title level={3}>Latest Post</Title>
              <Row style={{ gap: "15px", marginTop: "10px" }}>
                {similar &&
                  similar.length &&
                  similar.map((item) => {
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
                              <Title
                                level={4}
                                style={{ fontSize: "18px", fontWeight: "700" }}>
                                {item.title.length > 60
                                  ? item.title.slice(0, 60) + "..."
                                  : item.title}
                              </Title>
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
    </div>
  );
}
