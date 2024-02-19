"use client";
import { usePermissionMutation } from "@/hook/usePermissionMutation";
import { getPermission } from "@/services/permission";
import { DeleteTwoTone, EditTwoTone, PlusOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Tag } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useQuery } from "react-query";
import CreatePermission from "./role_permission.create";
import UpdatePermission from "./role_permission.update";
import { getRolePermission } from "@/services/role_permission";
import { useRolePermissionMutation } from "@/hook/useRolePermissionMutation";

export function RolePermission() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);

  const { data, isLoading, isError } = useQuery("role_permission", {
    queryFn: () => getRolePermission(),
  });

  const { onRemove } = useRolePermissionMutation({
    action: "DELETE",
    onSuccess: () => {
      console.log("oke");
    },
  });
  
  const columns: ColumnsType<any> = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Role",
      key: "role_id",
      dataIndex: "role_id",
      render: (_, { role_id }) => (
        <>
          {role_id.map((tag: any) => {
            
            return (
              <>
                {tag.name.toUpperCase()}
              </>
            );
          })}
        </>
      ),
    },
    {
      title: "Permission",
      key: "permission",
      dataIndex: "permission",
      render: (_, { permission }) => (
        <>
          {permission.map((tag: any) => {
           
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.name.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: "Actions",
      align: "center",
      render: (text, record, index) => {
        return (
          <>
            <EditTwoTone
              twoToneColor='#f57800'
              style={{ cursor: "pointer", margin: "0 20px" }}
              onClick={() => {
                setIsUpdateModalOpen(true);
                setDataUpdate(record);
              }}
            />

            <Popconfirm
              placement='leftTop'
              title={"Xác nhận xóa user"}
              description={"Bạn có chắc chắn muốn xóa user này ?"}
              onConfirm={() => onRemove(record)}
              okText='Xác nhận'
              cancelText='Hủy'>
              <span style={{ cursor: "pointer" }}>
                <DeleteTwoTone twoToneColor='#ff4d4f' />
              </span>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const renderHeader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className=''></div>
        <Button
          icon={<PlusOutlined />}
          type='primary'
          onClick={() => setIsCreateModalOpen(true)}>
          Thêm mới
        </Button>
      </div>
    );
  };
  const onChange = (
    pagination: any,
    filters: any,
    sorter: any,
    extra: any
  ) => {};

  return (
    <>
      {" "}
      <div
        className=''
        style={{
          background: "#1a1f37",
          padding: "20px",
          width: "1100px",
        }}>
        <h2 style={{ textAlign: "center", padding: "15px 0" }}>Role</h2>
        <Table
          title={renderHeader}
          rowKey={"id"}
          bordered
          dataSource={data}
          columns={columns}
          onChange={onChange}
          pagination={{
            showTotal: (total, range) => {
              return (
                <div>
                  {range[0]}-{range[1]} trên {total} rows
                </div>
              );
            },
          }}
        />
        <CreatePermission
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
        />
        <UpdatePermission
          isUpdateModalOpen={isUpdateModalOpen}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
          dataUpdate={dataUpdate}
          setDataUpdate={setDataUpdate}
        />
      </div>
    </>
  );
}
