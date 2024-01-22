"use client";
import { DeleteTwoTone, EditTwoTone, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Popconfirm } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useQuery } from "react-query";

import { getGender } from "@/services/gender";
import CreateMovie from "./movie.create";
import { getMovie } from "@/services/movie";
import Image from "next/image";
import { useMovieMutation } from "@/hook/useMovieMutation";
import UpdateMovie from "./movie.update";

export function Movie() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);

  const { data, isLoading, isError } = useQuery("movie", {
    queryFn: () => getMovie(),
  });

  const { onRemove } = useMovieMutation({
    action: "DELETE",
    onSuccess: () => {},
  });
  const columns: ColumnsType<any> = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Image",
      dataIndex: "title",
      render: (text, record) => (
        <>
          <Image src={record.poster_path1} width={50} height={50} alt='' />
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
        <h2 style={{ textAlign: "center", padding: "15px 0" }}>Movie</h2>
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
        <CreateMovie
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
        />
        <UpdateMovie
          isUpdateModalOpen={isUpdateModalOpen}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
          dataUpdate={dataUpdate}
          setDataUpdate={setDataUpdate}
        />
      </div>
    </>
  );
}
