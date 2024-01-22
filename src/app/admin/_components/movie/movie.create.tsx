import { useGenderMutation } from "@/hook/useGenderMutation";
import { useMovieMutation } from "@/hook/useMovieMutation";
import { uploadToCloudinary } from "@/lib/upload.cloudinary";
import { getGender } from "@/services/gender";
import { PlusOutlined } from "@ant-design/icons";
import {
  Modal,
  Input,
  Form,
  Row,
  Col,
  message,
  Upload,
  SelectProps,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

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
const CreateMovie = (props: IProps) => {
  const [option, setOption] = useState([]);
  const [genders, setGenders] = useState([]);
  const { isCreateModalOpen, setIsCreateModalOpen } = props;
  const { data, isLoading, isError } = useQuery("gender", {
    queryFn: () => getGender(),
  });

  useEffect(() => {
    if (data) {
      let arr = data.map((item: any) => {
        return { value: item._id, label: item.name };
      });
      setOption(arr);
    }
  }, [isLoading]);
  const { form, onFinish } = useMovieMutation({
    action: "CREATE",
    genders: genders,
    onSuccess: () => {
      form.resetFields();
      setIsCreateModalOpen(false);
    },
  });

  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };
  const handleChange = (value: any) => {
    setGenders(value);
  };

  return (
    <Modal
      title='Add new Movie'
      width={1000}
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={8}>
            <Form.Item
              label='Movie_id'
              name='movie_id'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
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
          <Col span={24} md={8}>
            <Form.Item
              label='Gender'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select
                mode='tags'
                style={{ width: "100%" }}
                placeholder='Tags Mode'
                onChange={handleChange}
                options={option}
              />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Poster_path1'
              name='poster_path1'
              valuePropName='fileList'
              getValueFromEvent={normFile}>
              <Upload
                name='poster_path1'
                action='/upload.do'
                listType='picture-card'>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Poster_path1</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Poster_path2'
              name='poster_path2'
              valuePropName='fileList'
              getValueFromEvent={normFile}>
              <Upload
                name='poster_path2'
                action='/upload.do'
                listType='picture-card'>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Poster_path2</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Backdrop_path'
              name='backdrop_path'
              valuePropName='fileList'
              getValueFromEvent={normFile}>
              <Upload
                name='backdrop_path'
                action='/upload.do'
                listType='picture-card'>
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Backdrop_path</div>
                </div>
              </Upload>
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

export default CreateMovie;
