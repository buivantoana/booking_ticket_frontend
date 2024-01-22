"use client";
import Image from "next/image";
import logo from "../../../image/Screenshot_2023-12-21-removebg-preview.png";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function Contact() {
  
  return (
    <div
      style={{
        padding: "80px 150px",
        display: "flex",
        justifyContent: "space-between",
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
            "url('https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/seat-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
          opacity: ".05",
          mixBlendMode: "luminosity",
        }}></div>

      <div className='' style={{ width: "100%" }}>
        <div
          className=''
          style={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Image
            src={logo}
            style={{ margin: "0 auto" }}
            width={100}
            height={70}
            alt=''
          />
          <p style={{ color: "grey", textAlign: "center" }}>Contact With Us</p>
          <h1 style={{ fontSize: "50px", textAlign: "center" }}>
            Feel Free to Write us <br></br> Anytime
          </h1>
          <Form
            name='basic'
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 16 }}
            style={{
              width: 730,
              padding: "40px 0",
              margin: "0 auto",
              position: "relative",
            }}
            initialValues={{ remember: true }}
            layout='vertical'
            autoComplete='off'>
            <div className='' style={{ display: "flex", gap: "30px" }}>
              <Form.Item
                name='name'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}>
                <Input
                  size='large'
                  placeholder='Your Name'
                  style={{
                    width: "350px",
                    borderRadius: "0px",
                    background: "#f3f3f3",
                    padding: "19px 30px",
                    fontSize: "14px",
                    lineHeight: "1.2",
                  }}
                />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}>
                <Input
                  size='large'
                  placeholder='Email Address'
                  style={{
                    width: "350px",
                    borderRadius: "0px",
                    background: "#f3f3f3",
                    padding: "19px 30px",
                    fontSize: "14px",
                    lineHeight: "1.2",
                  }}
                />
              </Form.Item>
            </div>

            <div className='' style={{ display: "flex", gap: "30px" }}>
              <Form.Item
                name='phone'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}>
                <Input
                  size='large'
                  placeholder='Phone'
                  style={{
                    width: "350px",
                    borderRadius: "0px",
                    background: "#f3f3f3",
                    padding: "19px 30px",
                    fontSize: "14px",
                    lineHeight: "1.2",
                  }}
                />
              </Form.Item>
              <Form.Item
                name='subject'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}>
                <Input
                  size='large'
                  placeholder='Subject'
                  style={{
                    width: "350px",
                    borderRadius: "0px",
                    background: "#f3f3f3",
                    padding: "19px 30px",
                    fontSize: "14px",
                    lineHeight: "1.2",
                  }}
                />
              </Form.Item>
            </div>
            <Form.Item
              name='comment'
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}>
              <TextArea
                rows={4}
                style={{
                  borderRadius: "0px",
                  background: "#f3f3f3",
                  width: "730px",
                  maxWidth: "none",
                  padding: "19px 30px",
                  fontSize: "14px",
                  lineHeight: "1.2",
                }}
                placeholder='Write a Comment'
                maxLength={6}
              />
            </Form.Item>
            <div className='' style={{ width: "100%", display: "flex" }}>
              <button
                style={{
                  padding: "14px 30px",
                  background: "#d96c2c",
                  fontSize: "15px",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  margin: "0 auto",
                }}>
                Save Change
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
