import { useCinemasMutation } from "@/hook/useCinemasMutation";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";

interface IProps {
  isUpdateModalOpen: boolean;
  setIsUpdateModalOpen: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}

const UpdateCinemas = (props: IProps) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } =
    props;

  const { form, onFinish } = useCinemasMutation({
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
        location: dataUpdate.location,
        pointLat: dataUpdate.pointLat,
        pointLng: dataUpdate.pointLng,
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
      title='Update Cinemas'
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

export default UpdateCinemas;
