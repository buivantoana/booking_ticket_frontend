import { useGenderMutation } from "@/hook/useGenderMutation";
import { useMovieMutation } from "@/hook/useMovieMutation";
import { useScreeningsMutation } from "@/hook/useScreeningsMutation";
import { uploadToCloudinary } from "@/lib/upload.cloudinary";
import { getCinemas } from "@/services/cinemas";
import { getGender } from "@/services/gender";
import { getMovie } from "@/services/movie";
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
  optionMovie: any;
  optionCinemas: any;
}

const CreateScreenings = (props: IProps) => {
  const [times, setTimes] = useState<any>([]);
  const {
    isCreateModalOpen,
    setIsCreateModalOpen,
    optionMovie,
    optionCinemas,
  } = props;

  const { form, onFinish } = useScreeningsMutation({
    action: "CREATE",
    times: times,
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
    if (value.length > 0) {
      let arr = value.map((item: any) => {
        console.log(item);
        return JSON.parse(item);
      });
      setTimes(arr);
    }
  };

  let seats = [
    { seats: "A1", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A2", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A3", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A4", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A5", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A6", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A7", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A8", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A9", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A10", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A11", active: "no_active", place: "Vip", price: 60000 },
    { seats: "A12", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B13", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B14", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B15", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B16", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B17", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B18", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B19", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B20", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B21", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B22", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B23", active: "no_active", place: "Vip", price: 60000 },
    { seats: "B24", active: "no_active", place: "Vip", price: 60000 },
    { seats: "C25", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C26", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C27", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C28", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C29", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C30", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C31", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C32", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C33", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C34", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C35", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "C36", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D37", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D38", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D39", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D40", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D41", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D42", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D43", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D44", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D45", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D46", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D47", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "D48", active: "no_active", place: "Preminum", price: 45000 },
    { seats: "E49", active: "no_active", place: "Special", price: 30000 },
    { seats: "E50", active: "no_active", place: "Special", price: 30000 },
    { seats: "E51", active: "no_active", place: "Special", price: 30000 },
    { seats: "E52", active: "no_active", place: "Special", price: 30000 },
    { seats: "E53", active: "no_active", place: "Special", price: 30000 },
    { seats: "E54", active: "no_active", place: "Special", price: 30000 },
    { seats: "E55", active: "no_active", place: "Special", price: 30000 },
    { seats: "E56", active: "no_active", place: "Special", price: 30000 },
    { seats: "E57", active: "no_active", place: "Special", price: 30000 },
    { seats: "E58", active: "no_active", place: "Special", price: 30000 },
    { seats: "E59", active: "no_active", place: "Special", price: 30000 },
    { seats: "E60", active: "no_active", place: "Special", price: 30000 },
    { seats: "F61", active: "no_active", place: "Special", price: 30000 },
    { seats: "F62", active: "no_active", place: "Special", price: 30000 },
    { seats: "F63", active: "no_active", place: "Special", price: 30000 },
    { seats: "F64", active: "no_active", place: "Special", price: 30000 },
    { seats: "F65", active: "no_active", place: "Special", price: 30000 },
    { seats: "F66", active: "no_active", place: "Special", price: 30000 },
    { seats: "F67", active: "no_active", place: "Special", price: 30000 },
    { seats: "F68", active: "no_active", place: "Special", price: 30000 },
    { seats: "F69", active: "no_active", place: "Special", price: 30000 },
    { seats: "F70", active: "no_active", place: "Special", price: 30000 },
    { seats: "F71", active: "no_active", place: "Special", price: 30000 },
    { seats: "F72", active: "no_active", place: "Special", price: 30000 },
  ];
  let data7hTime = JSON.stringify({
    time: "7:30 am",
    seats: seats,
  });
  let data9hTime = JSON.stringify({
    time: "9:30 am",
    seats: seats,
  });
  let data11hTime = JSON.stringify({
    time: "11:30 am",
    seats: seats,
  });
  let data13hTime = JSON.stringify({
    time: "1:30 pm",
    seats: seats,
  });
  return (
    <Modal
      title='Add Screening'
      width={700}
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
          <Col span={24} md={8}>
            <Form.Item
              label='Movie'
              name='movies'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select style={{ width: 200 }} options={optionMovie} />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Cinemas'
              name='cinemas'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select style={{ width: 200 }} options={optionCinemas} />
            </Form.Item>
          </Col>

          <Col span={24} md={8}>
            <Form.Item
              label='Date'
              name='date'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} md={8}>
            <Form.Item
              label='Times'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select
                mode='tags'
                style={{ width: "100%" }}
                placeholder='Tags Mode'
                onChange={handleChange}
                options={[
                  {
                    value: `${data7hTime}`,
                    label: "7:30 am",
                  },
                  {
                    value: `${data9hTime}`,
                    label: "9:30 am",
                  },
                  {
                    value: `${data11hTime}`,
                    label: "11:30 am",
                  },
                  {
                    value: `${data13hTime}`,
                    label: "1:30 pm",
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

export default CreateScreenings;
