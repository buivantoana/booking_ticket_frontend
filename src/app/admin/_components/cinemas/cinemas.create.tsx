import { useCinemasMutation } from "@/hook/useCinemasMutation";
import { Modal, Input, Form, Row, Col, message, Select } from "antd";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreateCinemas = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const { form,onFinish } = useCinemasMutation({
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
      title='Add new user'
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      width={600}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={12}>
            <Form.Item
              label='Name'
              name='name'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item
              label='Location'
              name='location'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item
              label='PointLat'
              name='pointLat'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item
              label='PointLng'
              name='pointLng'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item
              label='Slug'
              name='slug'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select
                style={{ width: 200 }}
                defaultValue={"Slug"}
               
                options={[
                  {
                    label: "Hà Nội",
                    options: [{ label: "HN", value: "HN" }],
                  },
                  {
                    label: "Đà Năng",
                    options: [{ label: "DN", value: "DN" }],
                  },
                  {
                    label: "Hồ Chí Minh",
                    options: [{ label: "HCM", value: "HCM" }],
                  },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateCinemas;
