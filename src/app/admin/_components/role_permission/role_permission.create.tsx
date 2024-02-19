import { useRolePermissionMutation } from "@/hook/useRolePermissionMutation";
import { getPermission } from "@/services/permission";
import { getRole } from "@/services/role";
import { getRolePermission } from "@/services/role_permission";
import { Col, Form, Modal, Row, Select } from "antd";
import { useQuery } from "react-query";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreateRolePermission = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const { data } = useQuery("role", {
    queryFn: () => getRole(),
  });
  const { data: permission } = useQuery("permission", {
    queryFn: () => getPermission(),
  });
  const { data: rolePermission } = useQuery("role_permission", {
    queryFn: () => getRolePermission(),
  });

  const { form, onFinish } = useRolePermissionMutation({
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

  function filterDifferentObjects(arr1: any, arr2: any) {
    return arr1.filter(
      (obj1: any) => !arr2.some((obj2: any) => obj2.label === obj1.label)
    );
  }

  return (
    <Modal
      title='Add Role'
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      width={600}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}>
      <Form name='basic' onFinish={onFinish} layout='vertical' form={form}>
        <Row gutter={[15, 15]}>
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
                  rolePermission &&
                  filterDifferentObjects(
                    data &&
                      data.map((item: any) => {
                        return { value: item._id, label: item.name };
                      }),
                    rolePermission &&
                      rolePermission.map((item: any) => {
                        return { value: item._id, label: item.role_id[0].name };
                      })
                  )
                }
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

export default CreateRolePermission;
