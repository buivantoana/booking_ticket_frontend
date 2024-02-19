import { useAccountMutation } from "@/hook/useAccountMutation";
import { useRoleMutation } from "@/hook/useRoleMutation";
import { getRole } from "@/services/role";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useQuery } from "react-query";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreateUser = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;
  const { data } = useQuery("role", {
    queryFn: () => getRole(),
  });
  const { form, onFinish } = useAccountMutation({
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
      title='Add User'
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      width={600}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={12}>
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={12}>
            <Form.Item
              label='Role'
              name='role_id'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select
                style={{ width: "100%" }}
                placeholder='Tags Mode'
                options={
                  data &&
                  data.map((item: any) => {
                    return { value: item.name, label: item.name };
                  })
                }
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreateUser;
