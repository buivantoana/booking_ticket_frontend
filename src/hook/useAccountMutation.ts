"use client";
import { Signin, Signup } from "@/services/account";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { useLocalStorage } from "./useStorage";

type useAccountMutationProps = {
  action: "SIGNUP" | "SIGNIN";
  defaultValues?: any;
  onSuccess?: () => void;
};
export const useAccountMutation = ({
  action,
  onSuccess,
}: useAccountMutationProps) => {
  const [, setUser] = useLocalStorage("user", {});
  // const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (account: typeAccount) => {
      switch (action) {
        case "SIGNUP":
          return await Signup(account);

        case "SIGNIN":
          return await Signin(account);

        default:
          return null;
      }
    },
    onSuccess: (data) => {
      if (Object.keys(data)[0]) {
        setUser(data);
        onSuccess && onSuccess();
      }

      // queryClient.invalidateQueries({
      //   queryKey: ["cinemas"],
      // });
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
