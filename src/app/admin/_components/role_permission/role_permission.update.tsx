import { usePermissionMutation } from "@/hook/usePermissionMutation";
import { useRolePermissionMutation } from "@/hook/useRolePermissionMutation";
import { getPermission } from "@/services/permission";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";

interface IProps {
  isUpdateModalOpen: boolean;
  setIsUpdateModalOpen: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}

const UpdateRolePermission = (props: IProps) => {
  const { isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate } =
    props;

  const { form, onFinish } = useRolePermissionMutation({
    action: "UPDATE",
    defaultValues: dataUpdate,
    onSuccess: () => {
      form.resetFields();
      setIsUpdateModalOpen(false);
      setDataUpdate(null);
    },
  });
  const { data: permission } = useQuery("permission", {
    queryFn: () => getPermission(),
  });

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        role_id: dataUpdate && `${dataUpdate._id}`,
        permission:
          dataUpdate &&
          dataUpdate.permission.map((item: any) => {
            return { value: item._id, label: item.name };
          }),
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
            <Form.Item label='Role' name='role_id'>
              <Select
                disabled
                style={{ width: "100%" }}
                options={
                  dataUpdate && [
                    {
                      value: dataUpdate._id,
                      label: dataUpdate.role_id[0].name,
                    },
                  ]
                }
                placeholder='Tags Mode'
              />
            </Form.Item>
          </Col>

          <Col span={24} md={12}>
            <Form.Item
              label='Permission'
              name='permission'
              rules={[{ required: true, message: "Please input your name!" }]}>
              <Select
                mode='tags'
                style={{ width: "100%" }}
                placeholder='Tags Mode'
                options={
                  permission &&
                  permission.map((item: any) => {
                    return { value: item._id, label: item.name };
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

export default UpdateRolePermission;
