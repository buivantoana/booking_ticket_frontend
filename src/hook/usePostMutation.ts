"use client";
import { uploadToCloudinary } from "@/lib/upload.cloudinary";
import { addPost, deletePost, updatePost } from "@/services/post";
import { useTicketContext } from "@/store/UseContext";
import { Form } from "antd";

import { useMutation, useQueryClient } from "react-query";

type useCinemasMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;

  content?: string;
  onSuccess?: () => void;
};
export const usePostMutation = ({
  action,
  defaultValues = { name: "" },
  content,
  onSuccess,
}: useCinemasMutationProps) => {
  const queryClient = useQueryClient();
  const context: any = useTicketContext();
  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (Post: typePost) => {
      switch (action) {
        case "CREATE":
          return await addPost(Post);
        case "UPDATE":
          return await updatePost({ ...Post, _id: defaultValues._id });
        case "DELETE":
          return await deletePost(Post._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: any) => {
    if (content) {
      if (action === "UPDATE") {
        mutate({
          ...values,
          author: [context.state.user._id],
          content: content,
          image: defaultValues.image,
        });
      } else {
        const image: any = await uploadToCloudinary(
          values.image[0].originFileObj
        );
        if (image) {
          mutate({
            ...values,
            author: [context.state.user._id],
            content: content,
            image: image,
          });
        }
      }
    }
  };
  const onRemove = (gender: typePost) => {
    mutate(gender);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
