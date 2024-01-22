import { useGenderMutation } from "@/hook/useGenderMutation";
import { Modal, Input, Form, Row, Col, message } from "antd";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreateGender = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const { form, onFinish } = useGenderMutation({
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
      title='Add Gender'
      open={isCreateModalOpen}
      onOk={() => form.submit()}
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
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateGender;
