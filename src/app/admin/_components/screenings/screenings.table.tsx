"use client";
import { DeleteTwoTone, EditTwoTone, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Popconfirm } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useMovieMutation } from "@/hook/useMovieMutation";
import { getScreenings } from "@/services/screenings";
import CreateScreenings from "./screenings.create";
import { useScreeningsMutation } from "@/hook/useScreeningsMutation";
import { getMovie } from "@/services/movie";
import { getCinemas } from "@/services/cinemas";
import UpdateGender from "../gender/gender.update";
import UpdateScreening from "./screening.update";

export function Screenings() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [optionMovie, setOptionMovie] = useState([]);
  const [optionCinemas, setOptionCinemas] = useState([]);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [dataUpdate, setDataUpdate] = useState<any>(null);
  const { data: movie, isLoading: loadingMovie } = useQuery("movie", {
    queryFn: () => getMovie(),
  });
  const { data: cinemas, isLoading: loadingCinemas } = useQuery("cinemas", {
    queryFn: () => getCinemas(),
  });

  useEffect(() => {
    if (movie && cinemas) {
      let arrMovie = movie.map((item: any) => {
        return { value: item._id, label: item.title };
      });
      let arrCinemas = cinemas.map((item: any) => {
        return { value: item._id, label: item.name };
      });
      setOptionMovie(arrMovie);
      setOptionCinemas(arrCinemas);
    }
  }, [loadingMovie, loadingCinemas]);

  const { data, isLoading, isError } = useQuery("screenings", {
    queryFn: () => getScreenings(),
  });

  const { onRemove } = useScreeningsMutation({
    action: "DELETE",
    onSuccess: () => {
      console.log("oke");
    },
  });
  const columns: ColumnsType<typeScreenings> = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "movies",
      render: (text, record) => {
        return (
          <>
            <p>{record.movies[0].title}</p>
          </>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Cinemas",
      dataIndex: "cinemas",
      render: (text, record) => {
        return (
          <>
            <p>{record.cinemas[0].slug}</p>
          </>
        );
      },
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
        <h2 style={{ textAlign: "center", padding: "15px 0" }}>Screening</h2>
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
        <CreateScreenings
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
          optionMovie={optionMovie}
          optionCinemas={optionCinemas}
        />
        <UpdateScreening
          isUpdateModalOpen={isUpdateModalOpen}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
          dataUpdate={dataUpdate}
          setDataUpdate={setDataUpdate}
          optionMovie={optionMovie}
          optionCinemas={optionCinemas}
        />
      </div>
    </>
  );
}
