import { useCinemasMutation } from "@/hook/useCinemasMutation";
import { useFoodMutation } from "@/hook/useFoodMutation";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";

interface IProps {
  isUpdateModalOpen: boolean;
  setIsUpdateModalOpen: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}

const UpdateFood = (props: IProps) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } =
    props;

  const { form, onFinish } = useFoodMutation({
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
        name: dataUpdate.name,
        price: dataUpdate.price,
        slug: dataUpdate.slug,
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
      title='Update Food'
      open={isUpdateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseUpdateModal()}
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
        </Row>
      </Form>
    </Modal>
  );
};

export default UpdateFood;
