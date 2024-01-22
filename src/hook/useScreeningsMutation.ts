"use client";

import {
  addScreenings,
  deleteScreenings,
  updateScreenings,
} from "@/services/screenings";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type useScreeningsMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  times?: any;
  onSuccess?: () => void;
};
export const useScreeningsMutation = ({
  action,
  defaultValues = { name: "" },
  times,
  onSuccess,
}: useScreeningsMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (screenings: typeScreenings) => {
      switch (action) {
        case "CREATE":
          return await addScreenings(screenings);
        case "UPDATE":
          return await updateScreenings({
            ...screenings,
            _id: defaultValues._id,
          });
        case "DELETE":
          return await deleteScreenings(screenings._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["screenings"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: any) => {
    mutate({
      ...values,
      timeSlots: times,
      movies: [values.movies],
      cinemas: [values.cinemas],
    });
  };
  const onRemove = (screenings: typeScreenings) => {
    mutate(screenings);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
