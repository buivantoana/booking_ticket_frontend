"use client";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Provider({ children }: any) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <ToastContainer />
    </>
  );
}

export default Provider;
