"use client";
import { addGender, deleteGender, updateGender } from "@/services/gender";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type useGenderMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useGenderMutation = ({
  action,
  defaultValues = { name: "" },
  onSuccess,
}: useGenderMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (gender: typeGender) => {
      switch (action) {
        case "CREATE":
          return await addGender({ ...gender, movies: [] });
        case "UPDATE":
          return await updateGender({
            _id: defaultValues._id,
            name: gender.name,
            movies: [],
          });
        case "DELETE":
          return await deleteGender(gender._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gender"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: typeGender) => {
    console.log(values);
    mutate(values);
  };
  const onRemove = (gender: typeGender) => {
    mutate(gender);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
