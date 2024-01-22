import Image from "next/image";
import "./styles/about.css";
import bg from "../../image/background-map-about-home-2.png";
import ab1 from "../../image/image-1-about-home-2.jpg";
import ab2 from "../../image/image-2-about-home-2.jpg";
import arrow from "../../image/image-arrow-about-about-page.png";
import mes from "../../image/background-experience-about-home-2.png";
import line from "../../image/image-line-about-home-2.png";
import movie from "../../image/Screenshot_2023-12-21-removebg-preview.png";
import { NotificationOutlined, TrophyOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Col, Flex } from "antd";
export default function About() {
  return (
    <div className='about-home'>
      <div className='about-home-left'>
        <Image className='about-home-left-bg' src={bg} alt='bg' />
        <Image src={arrow} className='about-home-left-arrow' alt='bg' />

        <Image className='about-home-left-ab1' src={ab1} alt='bg' />
        <Image className='about-home-left-line' src={line} alt='bg' />
        <Image src={ab2} className='about-home-left-ab2' alt='bg' />
        <Image className='about-home-left-mes' src={mes} alt='bg' />
        <h2>20</h2>
        <p>
          Years of <br></br> Producing
        </p>
      </div>
      <div
        className='about-right'
       >
        <Image src={movie} width={100} height={70} alt='' />
        <p style={{ marginLeft: "20px", color: "grey" }}>Get To Knows US</p>
        <h2
          style={{
            marginLeft: "20px",
            fontSize: "50px",
            lineHeight: 1.2,
            marginTop: "10px",
          }}>
          The Best Movie Ticket Distributor
        </h2>
        <p style={{ margin: "30px 20px", color: "grey", lineHeight: 1.8 }}>
          Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
          tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus
          augue, commodo ornare felis non, eleifend pharetra eleifend.
        </p>
        <div className='' style={{ marginLeft: "20px" }}>
          <Flex vertical={false} className=''>
            <Col className=''>
              <Flex vertical={false}>
                <TrophyOutlined
                  style={{
                    fontSize: "30px",
                    color: "#d96c2c",
                    marginRight: "15px",
                  }}
                />
                <div className=''>
                  <Title level={4}>Unlimited Awards</Title>
                  <p style={{ marginTop: "10px", color: "grey" }}>
                    We’ve designed a culture that allows our stewards to
                    assimilate.
                  </p>
                </div>
              </Flex>
              <Flex
                vertical={false}
                className=''
                style={{
                  marginTop: "20px",
                }}>
                <Col>
                  <NotificationOutlined
                    style={{
                      fontSize: "30px",
                      color: "#d96c2c",
                      marginRight: "15px",
                    }}
                  />
                </Col>

                <Col>
                  <Title level={4}>Our Directors</Title>
                  <p style={{ marginTop: "10px", color: "grey" }}>
                    We’ve designed a culture that allows our stewards to
                    assimilate.
                  </p>
                </Col>
              </Flex>
            </Col>
            <Col
              className=''
              style={{
                width: 201,
                height: 185,
                borderBottom: "5px solid #d96c2c",
                background: "#F3F3F3",
                padding: "20px",
              }}>
              <p
                style={{
                  fontSize: "12px",
                  color: "#d96c2c",
                  fontWeight: "700",
                }}>
                JOIN US
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginTop: "10px",
                }}>
                Seeking a Career in a Movie Production
              </p>
            </Col>
          </Flex>
          <button
            style={{
              marginTop: "15px",
              padding: "17px 50px",
              background: "#d96c2c",
              fontSize: "15px",
              color: "white",
              border: "none",
              fontWeight: "600",
            }}>
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
