"use client";
import { usePermissionMutation } from "@/hook/usePermissionMutation";
import { getPermission } from "@/services/permission";
import { DeleteTwoTone, EditTwoTone, PlusOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useQuery } from "react-query";
import CreatePermission from "./permission.create";
import UpdatePermission from "./permission.update";

export function Permission() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);

  const { data, isLoading, isError } = useQuery("permission", {
    queryFn: () => getPermission(),
  });

  const { onRemove } = usePermissionMutation({
    action: "DELETE",
    onSuccess: () => {
      console.log("oke");
    },
  });
  const columns: ColumnsType<typeFood> = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
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
