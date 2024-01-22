"use client";
import { useAccountMutation } from "@/hook/useAccountMutation";
import { Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type TypeSignin = {
  email?: string;
  password?: string;
  remember?: string;
};

export function SignIn() {
  let router = useRouter();
  const { onFinish } = useAccountMutation({
    action: "SIGNIN",
    onSuccess: () => {
      alert("thanh cong");
      setTimeout(() => {
        router.push("/");
      });
    },
  });
  return (
    <div
      className=''
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Form
        name='basic'
        onFinish={onFinish}
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 500 }}
        initialValues={{ remember: true }}
        layout='vertical'
        autoComplete='off'>
        <Form.Item<TypeSignin>
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input size='large' type='email' style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item<TypeSignin>
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password size='large' style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item<TypeSignin> name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <button
            type='submit'
            style={{
              padding: "17px 0px",
              background: "#d96c2c",
              fontSize: "15px",
              color: "white",
              border: "none",
              fontWeight: "600",
              width: "500px",
            }}>
            Login
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
