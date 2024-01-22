import { useMovieMutation } from "@/hook/useMovieMutation";
import { Modal, Input, Form, Row, Col } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";

interface IProps {
  isUpdateModalOpen: boolean;
  setIsUpdateModalOpen: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}

const UpdateMovie = (props: IProps) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } =
    props;

  const { form, onFinish } = useMovieMutation({
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
        title: dataUpdate.title,
        release_date: dataUpdate.release_date,
        times: dataUpdate.times,
        traler: dataUpdate.traler,
        overview: dataUpdate.overview,
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
      title='Update Movie'
      open={isUpdateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseUpdateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={8}>
            <Form.Item
              label='Title'
              name='title'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Release_date'
              name='release_date'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Times'
              name='times'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Traler'
              name='traler'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={32}>
            <Form.Item
              label='Overview'
              name='overview'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default UpdateMovie;
