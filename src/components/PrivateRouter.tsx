"use client";
import React, { FC, use } from "react";
import { redirect } from "next/navigation";
import { useTicketContext } from "@/store/UseContext";
import { useLocalStorage } from "@/hook/useStorage";

interface PrivateRouteProps {
  children: React.ReactNode;
  path?: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  path = "/account",
}) => {
  const [user] = useLocalStorage("user", {});

  console.log(user);

  if (
    !user ||
    Object.keys(user).length === 0 ||
    user.data[0].role === "MEMBER"
  ) {
    return redirect(path);
  }
  return children;
};

export default PrivateRoute;
