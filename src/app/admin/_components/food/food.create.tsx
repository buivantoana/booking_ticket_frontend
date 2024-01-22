import { useCinemasMutation } from "@/hook/useCinemasMutation";
import { useFoodMutation } from "@/hook/useFoodMutation";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Input, Form, Row, Col, message, Select, Upload } from "antd";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const CreateFood = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const { form, onFinish } = useFoodMutation({
    action: "CREATE",
    onSuccess: () => {
      form.resetFields();
      setIsCreateModalOpen(false);
    },
  });

  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };

  return (
    <Modal
      title='Add Food'
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      width={800}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={8}>
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Price'
              name='price'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input type='number' />
            </Form.Item>
          </Col>

          <Col span={24} md={8}>
            <Form.Item
              label='Slug'
              name='slug'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select
                style={{ width: 200 }}
                defaultValue={"Slug"}
                options={[
                  {
                    label: "Nước uống",
                    options: [{ label: "Drink", value: "Drink" }],
                  },
                  {
                    label: "Đồ ăn",
                    options: [{ label: "Food", value: "Food" }],
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Image'
              name='image'
              valuePropName='fileList'
              getValueFromEvent={normFile}>
              <Upload name='image' action='/upload.do' listType='picture-card'>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Image</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateFood;
