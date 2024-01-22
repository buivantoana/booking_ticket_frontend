"use client";

import { uploadToCloudinary } from "@/lib/upload.cloudinary";
import { addMovie, deleteMovie, updateMovie } from "@/services/movie";
import { Form } from "antd";
import { useMutation, useQueryClient } from "react-query";

type useMovieMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: any;
  genders?: string[];
  onSuccess?: () => void;
};
export const useMovieMutation = ({
  action,
  defaultValues = { name: "" },
  genders,
  onSuccess,
}: useMovieMutationProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (movie: typeMovie) => {
      switch (action) {
        case "CREATE":
          return await addMovie({ ...movie, movie_id: Number(movie.movie_id) });
        case "UPDATE":
          return await updateMovie({ ...movie, _id: defaultValues._id });
        case "DELETE":
          return await deleteMovie(movie._id);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movie"],
      });
      onSuccess && onSuccess();
    },
  });
  const onFinish = async (values: any) => {
    try {
      if (action === "UPDATE") {
        mutate(values);
      } else {
        const posterPath1Url: any = await uploadToCloudinary(
          values.poster_path1[0].originFileObj
        );
        const posterPath2Url: any = await uploadToCloudinary(
          values.poster_path2[0].originFileObj
        );
        const backdropPathUrl: any = await uploadToCloudinary(
          values.backdrop_path[0].originFileObj
        );

        if (posterPath1Url && posterPath2Url && backdropPathUrl) {
          values.poster_path1 = posterPath1Url;
          values.poster_path2 = posterPath2Url;
          values.backdrop_path = backdropPathUrl;
          let data = { ...values, genders: genders };
          mutate(data);
        }
      }
    } catch (error) {
      console.error("Error processing images:", error);
    }
  };
  const onRemove = (movie: typeMovie) => {
    mutate(movie);
  };
  return {
    form,
    onFinish,
    onRemove,
    ...rest,
  };
};
