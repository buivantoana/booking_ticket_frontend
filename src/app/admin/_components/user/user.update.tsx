import { useAccountMutation } from "@/hook/useAccountMutation";
import { useRoleMutation } from "@/hook/useRoleMutation";
import { getRole } from "@/services/role";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";

interface IProps {
  isUpdateModalOpen: boolean;
  setIsUpdateModalOpen: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}

const UpdateUser = (props: IProps) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } =
    props;
  const { data } = useQuery("role", {
    queryFn: () => getRole(),
  });
  const { form, onFinish } = useAccountMutation({
    action: "UPDATE",
    defaultValues: dataUpdate,
    onSuccess: () => {
      form.resetFields();
      setIsUpdateModalOpen(false);
      setDataUpdate(null);
    },
  });

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        email: dataUpdate.email,
        role_id: dataUpdate.role,
      });
    }
  }, [dataUpdate]);

  const handleCloseUpdateModal = () => {
    form.resetFields();
    setIsUpdateModalOpen(false);
    setDataUpdate(null);
  };

  return (
    <Modal
      title='Update Role'
      open={isUpdateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseUpdateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={12}>
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input disabled />
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

export default UpdateUser;
