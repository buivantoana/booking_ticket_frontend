"use client";

import { useTicketContext } from "@/store/UseContext";
import { InputNumber, Table } from "antd";
import { ColumnsType } from "antd/es/table";
interface DataType {
  key: string;
  type: string;
  quantity: React.ReactNode;
  price: number;
}
export function Second({
  ticket,
  handleChangeTicket,
}: {
  ticket: { total: number; ticket: number };
  handleChangeTicket: (e: any) => void;
}) {
  const context: any = useTicketContext();
  const columns: ColumnsType<DataType> = [
    {
      title: "Loại vé",
      dataIndex: "type",
      key: "type",

      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      type: "Người lớn",

      quantity: (
        <InputNumber
          min={0}
          max={10}
          defaultValue={0}
          onChange={(e) => handleChangeTicket(e)}
        />
      ),
      price: 100,
    },
  ];

  return (
    <div>
      <div
        className=''
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <span>Tên Phim:</span>{" "}
          <span style={{ color: "black" }}>{context.state.movie}</span>
        </div>
        <div className=''>
          <span>Ngày:</span>{" "}
          <span style={{ color: "black" }}>{context.state.date}</span>
        </div>
        <div className=''>
          <span>Suất chiếu:</span>{" "}
          <span style={{ color: "black" }}>{context.state.time}</span>
        </div>
      </div>
      <div className='' style={{ marginTop: "15px" }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
}
