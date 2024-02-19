import { usePermissionMutation } from "@/hook/usePermissionMutation";
import { Col, Form, Input, Modal, Row } from "antd";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreatePermission = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const { form, onFinish } = usePermissionMutation({
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
      title='Add Role'
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
        </Row>
      </Form>
    </Modal>
  );
};

export default CreatePermission;
