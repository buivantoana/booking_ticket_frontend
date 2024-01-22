import { useAccountMutation } from "@/hook/useAccountMutation";
import { Form, Input } from "antd";

type TypeSignup = {
  email?: string;
};
export function SignUp() {
    const {onFinish} = useAccountMutation({
      action: "SIGNUP",
      onSuccess: () => {
        alert("thanh cong");
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
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout='vertical'
        autoComplete='off'>
        <Form.Item<TypeSignup>
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}>
          <Input size='large' type='email' style={{ width: "500px" }} />
        </Form.Item>
        <div className=''>
          <p
            style={{
              color: "grey",
              fontSize: "17px",
              lineHeight: "1.5",
            }}>
            Một liên kết để đặt mật khẩu mới sẽ được gửi đến địa chỉ email của
            bạn.<br></br>
            Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của
            bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài
            khoản của bạn và cho các mục đích khác được mô tả trong{" "}
            <span style={{ color: "#d96c2c" }}>chính sách bảo mật</span> của
            chúng tôi.
          </p>
        </div>
        <Form.Item>
          <button
            type='submit'
            style={{
              marginTop: "15px",
              padding: "17px 0px",
              background: "#d96c2c",
              fontSize: "15px",
              color: "white",
              border: "none",
              fontWeight: "600",
              width: "500px",
            }}>
            Register
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
