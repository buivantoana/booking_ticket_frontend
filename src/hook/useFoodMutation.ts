"use client";
import { uploadToCloudinary } from "@/lib/upload.cloudinary";
import { addFood, deleteFood, updateFood } from "@/services/food";
import { addGender, deleteGender, updateGender } from "@/services/gender";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type useFoodMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useFoodMutation = ({
  action,
  defaultValues = { name: "" },
  onSuccess,
}: useFoodMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (food: typeFood) => {
      switch (action) {
        case "CREATE":
          return await addFood(food);
        case "UPDATE":
          return await updateFood(food);
        case "DELETE":
          return await deleteFood(food._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: typeFood) => {
    if (action === "UPDATE") {
      mutate({ ...values, _id: defaultValues._id, image: defaultValues.image });
    } else {
      const image: any = await uploadToCloudinary(
        values.image[0].originFileObj
      );
      if (image) {
        values.image = image;
        mutate(values);
      }
    }
  };
  const onRemove = (food: typeFood) => {
    mutate(food);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
