"use client";
import {
  addRolePermission,
  deleteRolePermission,
  updateRolePermission,
} from "@/services/role_permission";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type useRolePermissionMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useRolePermissionMutation = ({
  action,
  defaultValues = { name: "" },
  onSuccess,
}: useRolePermissionMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (RolePermission: typeRolePermission) => {
      switch (action) {
        case "CREATE":
          return await addRolePermission(RolePermission);
        case "UPDATE":
          return await updateRolePermission({
            role_id: defaultValues.role_id[0]._id,
            _id: defaultValues._id,
            permission: RolePermission.permission,
          });
        case "DELETE":
          return await deleteRolePermission(RolePermission._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["role_permission"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: typeRolePermission) => {
    mutate(values);
  };
  const onRemove = (role: typeRolePermission) => {
    mutate(role);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
