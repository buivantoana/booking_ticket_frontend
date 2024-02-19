"use client";
import { addRole, deleteRole, updateRole } from "@/services/role";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type useRoleMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useRoleMutation = ({
  action,
  defaultValues = { name: "" },
  onSuccess,
}: useRoleMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (Role: typeRole) => {
      switch (action) {
        case "CREATE":
          return await addRole(Role);
        case "UPDATE":
          return await updateRole({ name: Role.name, _id: defaultValues._id });
        case "DELETE":
          return await deleteRole(Role._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["role"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: typeRole) => {
    mutate(values);
  };
  const onRemove = (role: typeRole) => {
    mutate(role);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
