import { getCinemas } from "@/services/cinemas";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Col, Flex, Row, Select } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Cinemas() {
  const [active, setactive] = useState<string>("");
  const [slug, setSlug] = useState("HN");
  const [dataSelect, setDataSelect] = useState<typeCinemas[]>([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 0,
    lng: 0,
  });

  const { data, isLoading, isError } = useQuery<typeCinemas[]>("cinemas", {
    queryFn: () => getCinemas(),
    onSuccess(data) {
      let arr = data.filter((item: typeCinemas) => item.slug === slug);
      setDataSelect(arr);
      setactive(arr[0]._id);
      setMapCenter({
        lat: Number(arr[0].pointLat),
        lng: Number(arr[0].pointLng),
      });
    },
  });

  const handleMarkerClick = (location: typeCinemas) => {
    setactive(location._id);
    setMapCenter({
      lat: Number(location.pointLat),
      lng: Number(location.pointLng),
    });
  };

  const mapStyles = {
    height: "566px",
    width: "100%",
  };

  const handleChange = (value: string) => {
    if (data) {
      let arr = data.filter((item: typeCinemas) => item.slug === value);
      setDataSelect(arr);
      setactive(arr[0]._id);
      setMapCenter({
        lat: Number(arr[0].pointLat),
        lng: Number(arr[0].pointLng),
      });
    }
  };

  return (
    <div
      style={{
        padding: "60px 150px",
        position: "relative",
      }}>
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
          opacity: ".08",
          mixBlendMode: "luminosity",
        }}></div>
      <div className=''>
        <Row>
          <Col span={8}>
            <Flex vertical={true} gap={10}>
              <h3>Tìm kiếm chi nhánh</h3>
              <Select
                defaultValue='HN'
                style={{ width: 250 }}
                onChange={handleChange}
                options={[
                  { value: "HN", label: "Hà Nội" },
                  { value: "DN", label: "Đà Nẵng" },
                  { value: "HCM", label: "Hồ Chí Minh" },
                ]}
              />
            </Flex>
          </Col>
          <Col span={16}>
            <h1 style={{ textAlign: "center" }}>Cinemas Location</h1>
          </Col>
        </Row>
        <Row>
          <Col
            span={8}
            className=''
            style={{
              overflowY: "scroll",
              width: "max-content",
              height: "566px",
              marginTop: "40px",
              overflowX: "hidden",
            }}>
            <Row style={{ gap: "15px" }}>
              {dataSelect &&
                dataSelect.length &&
                dataSelect.map((item) => {
                  return (
                    <>
                      <Col span={24}>
                        <div
                          onClick={() => handleMarkerClick(item)}
                          className=''
                          style={
                            active === item._id
                              ? {
                                  width: "370px",
                                  padding: "20px",
                                  background: "#d96c2c",
                                  color: "white",
                                }
                              : {
                                  width: "370px",
                                  padding: "20px",
                                  background: "#f3f3f3",
                                  color: "#000",
                                }
                          }>
                          <h3>{item.name}</h3>
                          <Flex
                            vertical={false}
                            gap={10}
                            style={{ marginTop: "10px" }}>
                            <EnvironmentOutlined />
                            <p>{item.location}</p>
                          </Flex>
                          <Flex
                            vertical={false}
                            gap={10}
                            style={{ marginTop: "10px" }}>
                            <PhoneOutlined />
                            <p>0325668050</p>
                          </Flex>
                          <Flex
                            vertical={false}
                            gap={10}
                            style={{ marginTop: "10px" }}>
                            <MailOutlined />
                            <p>taonbui219@gmail.com</p>
                          </Flex>
                        </div>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </Col>
          <Col
            span={16}
            className=''
            style={{ width: "600px", height: "566px", marginTop: "40px" }}>
            <LoadScript googleMapsApiKey='AIzaSyDqVM6uG7LT08KpV89WGgeYd-ikdg9whlk'>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={17}
                center={mapCenter}>
                {dataSelect &&
                  dataSelect.length &&
                  dataSelect.map((item) => (
                    <Marker
                      key={item._id}
                      position={{
                        lat: Number(item.pointLat),
                        lng: Number(item.pointLng),
                      }}
                      onClick={() => handleMarkerClick(item)}
                    />
                  ))}
              </GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </div>
    </div>
  );
}
