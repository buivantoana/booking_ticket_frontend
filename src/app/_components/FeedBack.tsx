import Image from "next/image";
import logo from "../../image/Screenshot_2023-12-21-removebg-preview.png";
import feedback from "../../image/feedback.png";
import profile from "../../image/profile.jpg";
import { Space, Rate, Flex, Col } from "antd";
import Slider from "react-slick";
import Title from "antd/es/typography/Title";
import "./styles/feedback.css";

export default function FeedBack() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
  };
  return (
    <div className='feedback-home'>
      <div className='feedback-home-bg'></div>
      <div className='feedback-home-flex'>
        <Col className='feedback-left'>
          <div className='' style={{ position: "relative", zIndex: 1 }}>
            <div
              className=''
              style={{
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
            <p style={{ color: "#d96c2c", margin: "8px 0" }}>Our Feedbacks</p>
            <Title
              level={2}
              >
              What They’re Talking About us?
            </Title>
          </div>
          <Slider {...settings}>
            <div className=''>
              <div className=''>
                <Flex
                  vertical={false}
                  align='center'
                  gap={30}
                  className='profile-feedback'>
                  <Col
                    className=''
                    style={{
                      width: "131px",
                      height: "131px",
                      background: "white",
                      border: "5px solid #d96c2c",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Image
                      src={profile}
                      width={106}
                      height={106}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "0 0",
                      }}
                      alt=''
                    />
                  </Col>
                  <Col className=''>
                    <Space>
                      <Rate value={5} />
                    </Space>
                    <h3 style={{ margin: "10px 0" }}>Mike Hardson</h3>
                    <p style={{ color: "grey" }}>Custumer</p>
                  </Col>
                </Flex>
                <p
                  style={{
                    color: "grey",
                    marginTop: "20px",
                    lineHeight: "2",
                    letterSpacing: "1px",
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam placeat veniam consequuntur fugit aut minus incidunt
                  et molestiae perferendis in facilis, culpa temporibus soluta
                  aliquid laboriosam iure nulla earum officia.
                </p>
              </div>
            </div>
            <div className=''>
              <div className=''>
                <Flex
                  vertical={false}
                  align='center'
                  gap={30}
                  className='profile-feedback'>
                  <Col
                    className=''
                    style={{
                      width: "131px",
                      height: "131px",
                      background: "white",
                      border: "5px solid #d96c2c",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Image
                      src={profile}
                      width={106}
                      height={106}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "0 0",
                      }}
                      alt=''
                    />
                  </Col>
                  <Col className=''>
                    <Space>
                      <Rate value={5} />
                    </Space>
                    <h3 style={{ margin: "10px 0" }}>Mike Hardson</h3>
                    <p style={{ color: "grey" }}>Custumer</p>
                  </Col>
                </Flex>
                <p
                  style={{
                    color: "grey",
                    marginTop: "20px",
                    lineHeight: "2",
                    letterSpacing: "1px",
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam placeat veniam consequuntur fugit aut minus incidunt
                  et molestiae perferendis in facilis, culpa temporibus soluta
                  aliquid laboriosam iure nulla earum officia.
                </p>
              </div>
            </div>
            <div className=''>
              <div className=''>
                <Flex
                  vertical={false}
                  align='center'
                  gap={30}
                  className='profile-feedback'>
                  <Col
                    className=''
                    style={{
                      width: "131px",
                      height: "131px",
                      background: "white",
                      border: "5px solid #d96c2c",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Image
                      src={profile}
                      width={106}
                      height={106}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "0 0",
                      }}
                      alt=''
                    />
                  </Col>
                  <Col className=''>
                    <Space>
                      <Rate value={5} />
                    </Space>
                    <h3 style={{ margin: "10px 0" }}>Mike Hardson</h3>
                    <p style={{ color: "grey" }}>Custumer</p>
                  </Col>
                </Flex>
                <p
                  style={{
                    color: "grey",
                    marginTop: "20px",
                    lineHeight: "2",
                    letterSpacing: "1px",
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam placeat veniam consequuntur fugit aut minus incidunt
                  et molestiae perferendis in facilis, culpa temporibus soluta
                  aliquid laboriosam iure nulla earum officia.
                </p>
              </div>
            </div>
          </Slider>
        </Col>
        <Col className='feedback-right'>
          <Image src={feedback} alt='' />
        </Col>
      </div>
    </div>
  );
}
