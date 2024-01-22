import { addBooking } from "@/services/booking";
import { getVnpay } from "@/services/vnpay";
import { useTicketContext } from "@/store/UseContext";
import { InfoCircleFilled } from "@ant-design/icons";
import { Form, Input, Modal, Radio, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";

import { useState } from "react";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
  handleSeats: () => void;
  total: number;
  seleted: any;
  screeningId: any;
}
export function CheckOut({
  isCreateModalOpen,
  setIsCreateModalOpen,
  handleSeats,
  total,
  seleted,
  screeningId,
}: IProps) {
  const [code, setcode] = useState<boolean>(false);
  const [form] = Form.useForm();
  const context: any = useTicketContext();
  let router = useRouter();
  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };
  function generateRandomOrderid(length: number) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let orderid = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      orderid += charset[randomIndex];
    }
    return orderid;
  }

  const onFinish = async (values: any) => {
    let html = "";
    Object.entries(context.state.food).map(([key, value]: any) => {
      return (html += `${value.name} x ${value.quantity} , `);
    });
    const data = {
      fullname: values.fullname,
      phone: values.phone,
      email: values.email,
      address: values.address,
      ordernote: values.ordernote,
      movie: context.state.movie,
      seats: seleted,
      drink: html,
      cinemas: context.state.cinemas,
      total: total,
      times: context.state.time,
      order_id: generateRandomOrderid(6),
      movies: [context.state.movie_id],
      screeningId: screeningId.id,
    };
    if (data) {
      let res = await addBooking(data);
      if (Object.keys(res)[0]) {
        handleSeats();
        let url: any = await getVnpay({
          order_id: data.order_id,
          amount: data.total,
        });
        if (url) {
          router.push(url);
        }
      }
    }
  };

  return (
    <div>
      <Modal
        className='modal-checkout'
        open={isCreateModalOpen}
        onOk={() => form.submit()}
        okText={"Thanh Toán"}
        confirmLoading={false}
        width={1200}
        style={{ padding: "30px" }}
        onCancel={() => handleCloseCreateModal()}
        maskClosable={false}>
        <div>
          <h1>Thủ tục thanh toán </h1>
          <div
            className=''
            style={
              code
                ? {
                    overflow: "hidden",
                    margin: "20px 0",
                    maxHeight: "400px",
                    transition: ".4s",
                  }
                : {
                    overflow: "hidden",
                    margin: "20px 0",
                    maxHeight: "67px",
                    transition: ".4s",
                  }
            }>
            <div
              className=''
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "20px",
                background: "#F6F5F8",
                borderTop: "2px solid #d96c2c",
              }}>
              <InfoCircleFilled style={{ color: "#d96c2c" }} />
              <p style={{ color: "grey" }}>
                Có phiếu giảm giá?{" "}
                <span
                  onClick={() => setcode(!code)}
                  style={{ color: "#d96c2c" }}>
                  Nhấp vào đây để nhập mã của bạn
                </span>
              </p>
            </div>
            <div
              className=''
              style={{
                padding: "20px",
                border: "1px solid grey",
                borderRadius: "5px",
                marginTop: "50px",
              }}>
              <p style={{ color: "grey" }}>Bạn hãy điền mã vào đây</p>
              <div
                className=''
                style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <Input style={{ width: "600px", borderRadius: "0px" }} />
                <button
                  style={{
                    padding: "15px 0px",
                    background: "#d96c2c",
                    fontSize: "15px",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                    width: "140px",
                  }}>
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
          <div
            className=''
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}>
            <div className='' style={{ width: "45%" }}>
              <h2>Chi tiết thanh toán</h2>
              <Form
                name='basic'
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 500, marginTop: "30px" }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout='vertical'
                autoComplete='off'
                form={form}>
                <div className='' style={{ display: "flex", gap: "30px" }}>
                  <Form.Item
                    label='Firts Name'
                    name='fistname'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "250px" }} />
                  </Form.Item>
                  <Form.Item
                    label='Last Name'
                    name='lastname'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "250px" }} />
                  </Form.Item>
                </div>
                <Form.Item
                  label='FullName'
                  name='fullname'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "525px" }} />
                </Form.Item>
                <div className='' style={{ display: "flex", gap: "30px" }}>
                  <Form.Item
                    label='Phone'
                    name='phone'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "250px" }} />
                  </Form.Item>
                  <Form.Item
                    label='Email'
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input size='large' style={{ width: "250px" }} />
                  </Form.Item>
                </div>
                <Form.Item
                  label='Address'
                  name='address'
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input size='large' style={{ width: "525px" }} />
                </Form.Item>
                <Form.Item label='Order Notes' name='ordernote'>
                  <TextArea
                    rows={4}
                    style={{ width: "525px", maxWidth: "none" }}
                  />
                </Form.Item>
              </Form>
            </div>
            <div
              className=''
              style={{
                width: "45%",
              }}>
              <h2>Đơn đặt hàng của bạn</h2>
              <div
                className=''
                style={{
                  borderRadius: "5px",
                  border: "1px solid grey",
                  padding: "20px",
                  marginTop: "40px",
                }}>
                <div
                  className=''
                  style={{
                    display: "flex",
                    gap: "40px",
                    borderBottom: "1px solid grey",
                    paddingBottom: "20px",
                  }}>
                  <div className=''>
                    <h3>
                      {context.state.movie}{" "}
                      <span
                        style={{
                          fontSize: "15px",
                          color: "#d96c2c",
                          padding: "0px 8px",
                        }}>
                        x
                      </span>{" "}
                      {context.state.seats}
                    </h3>
                    <p style={{ color: "grey", marginTop: "10px" }}>
                      <span style={{ fontWeight: "700", color: "black" }}>
                        Date :
                      </span>{" "}
                      {context.state.date}
                    </p>
                    <p style={{ color: "grey", marginTop: "10px" }}>
                      <span style={{ fontWeight: "700", color: "black" }}>
                        Time :
                      </span>{" "}
                      {context.state.time}
                    </p>
                    <p style={{ color: "grey", marginTop: "10px" }}>
                      <span style={{ fontWeight: "700", color: "black" }}>
                        Cinemas :
                      </span>
                      {context.state.cinemas}
                    </p>
                    <div
                      className=''
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        gap: "10px",
                      }}>
                      <p
                        style={{
                          fontWeight: "700",
                          color: "black",
                        }}>
                        Drink :
                      </p>
                      {Object.keys(context.state.food).length &&
                        Object.keys(context.state.food)[0] &&
                        Object.entries(context.state.food).map(
                          ([key, value]: any) => {
                            if (value.slug === "Drink") {
                              return (
                                <>
                                  <p
                                    style={{
                                      color: "grey",
                                    }}>
                                    {value.name}
                                    <span
                                      style={{
                                        fontSize: "10px",
                                        color: "#d96c2c",
                                        padding: "0px 8px",
                                      }}>
                                      x
                                    </span>{" "}
                                    {value.quantity}
                                  </p>
                                </>
                              );
                            }
                          }
                        )}
                    </div>
                    <div
                      className=''
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        gap: "10px",
                      }}>
                      <p
                        style={{
                          fontWeight: "700",
                          color: "black",
                        }}>
                        Food :
                      </p>
                      {Object.keys(context.state.food).length &&
                        Object.keys(context.state.food)[0] &&
                        Object.entries(context.state.food).map(
                          ([key, value]: any) => {
                            if (value.slug === "Food") {
                              return (
                                <>
                                  <p
                                    style={{
                                      color: "grey",
                                    }}>
                                    {value.name}
                                    <span
                                      style={{
                                        fontSize: "10px",
                                        color: "#d96c2c",
                                        padding: "0px 8px",
                                      }}>
                                      x
                                    </span>{" "}
                                    {value.quantity}
                                  </p>
                                </>
                              );
                            }
                          }
                        )}
                    </div>
                  </div>
                </div>
                <div
                  className=''
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                  }}>
                  <p style={{ color: "#737373", fontWeight: "700" }}>Total</p>
                  <p style={{ color: "#737373", fontWeight: "700" }}>
                    {total.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
              </div>
              <div
                className=''
                style={{
                  padding: "20px",
                  background: "#e8eaee",
                  marginTop: "20px",
                }}>
                <Form
                  name='basic'
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 16 }}
                  style={{ width: 500, marginTop: "30px" }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  layout='vertical'
                  autoComplete='off'
                  form={form}>
                  <Form.Item name='type'>
                    <Radio.Group
                      name='type'
                      value={1}
                      style={{ display: "block" }}>
                      <Space direction='vertical'>
                        <Radio value={1}>
                          Chuyển khoản ngân hàng trực tiếp
                        </Radio>
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </Form>

                <div
                  className=''
                  style={{ display: "flex", marginTop: "25px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
