"use client";
import {
  addPermission,
  deletePermission,
  updatePermission,
} from "@/services/permission";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type usePermissionMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const usePermissionMutation = ({
  action,
  defaultValues = { name: "" },
  onSuccess,
}: usePermissionMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (Permission: typePermission) => {
      switch (action) {
        case "CREATE":
          return await addPermission(Permission);
        case "UPDATE":
          return await updatePermission({
            name: Permission.name,
            _id: defaultValues._id,
          });
        case "DELETE":
          return await deletePermission(Permission._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["permission"],
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
