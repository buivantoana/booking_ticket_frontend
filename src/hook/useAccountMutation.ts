"use client";
import {
  Signin,
  Signup,
  createUser,
  deleteUser,
  updateUSer,
} from "@/services/account";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { useLocalStorage } from "./useStorage";
import { io } from "socket.io-client";

type useAccountMutationProps = {
  action: "SIGNUP" | "SIGNIN" | "CREATE" | "DELETE" | "UPDATE";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useAccountMutation = ({
  action,
  onSuccess,
  defaultValues,
}: useAccountMutationProps) => {
  const [, setUser] = useLocalStorage("user", {});
  const queryClient = useQueryClient();
  const socket = io("ws://localhost:8000");
  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (account: any) => {
      switch (action) {
        case "SIGNUP":
          return await Signup({ ...account, role: "member" });
        case "UPDATE":
          return await updateUSer({
            email: account.email,
            _id: defaultValues._id,
            role: account.role_id,
          });
        case "SIGNIN":
          return await Signin(account);
        case "CREATE":
          return await createUser({
            email: account.email,
            role: account.role_id,
          });
        case "DELETE":
          return await deleteUser(account._id);
        default:
          return null;
      }
    },
    onSuccess: (data) => {
      if (action === "DELETE") {
        if (data.status === 1) {
          alert("ban khong co quyen");
        }
      } else if (action === "SIGNIN") {
        if (Object.keys(data)[0]) {
          setUser(data);
        }
        onSuccess && onSuccess();
      } else if (action === "UPDATE") {
        socket.emit("editPermission", { id: defaultValues._id });
        onSuccess && onSuccess();
      } else {
        onSuccess && onSuccess();
      }

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
  const onFinish = async (values: typeAccount) => {
    mutate(values);
  };
  const onRemove = (values: typeAccount) => {
    mutate(values);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
