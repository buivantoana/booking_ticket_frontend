import { getFood } from "@/services/food";
import { InputNumber, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { useQuery } from "react-query";

export function Last({
  handleQuantityChange,
}: {
  handleQuantityChange: (record: typeFood, value: any) => void;
}) {
  const { data: dataFood } = useQuery("food", {
    queryFn: () => getFood(),
  });
  const columnsfood: ColumnsType<typeFood> = [
    {
      title: "Đồ ăn",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => {
        return (
          <>
            <Image src={record.image} alt='' width={50} height={50} />
          </>
        );
      },
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return (
          <>
            <InputNumber
              min={0}
              max={10}
              onChange={(value: any) => handleQuantityChange(record, value)}
              defaultValue={0}
            />
          </>
        );
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render(value, record, index) {
        return (
          <>
            <p>
              {value.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <div className=''>
        <h2 style={{ textAlign: "center" }}>Chọn đồ ăn</h2>
        <div className='' style={{ marginTop: "15px" }}>
          <Table
            columns={columnsfood}
            dataSource={dataFood}
            pagination={false}
          />
        </div>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Nếu bạn không muốn mua đồ ăn vui lòng ấn qua chọn ghế !
        </p>
      </div>
    </div>
  );
}
