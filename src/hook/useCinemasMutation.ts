"use client";
import { addCinemas, deleteCinemas, updateCinemas } from "@/services/cinemas";
import { addGender, deleteGender, updateGender } from "@/services/gender";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type useCinemasMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useCinemasMutation = ({
  action,
  defaultValues = { name: "" },
  onSuccess,
}: useCinemasMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (cinemas: typeCinemas) => {
      switch (action) {
        case "CREATE":
          return await addCinemas(cinemas);
        case "UPDATE":
          return await updateCinemas({ ...cinemas, _id: defaultValues._id });
        case "DELETE":
          return await deleteCinemas(cinemas._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cinemas"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: typeCinemas) => {
    mutate(values);
  };
  const onRemove = (gender: typeCinemas) => {
    mutate(gender);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
