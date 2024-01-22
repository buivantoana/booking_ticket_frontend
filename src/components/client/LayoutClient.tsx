import React from "react";

import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";

export default function LayoutClient({ children }: any) {
  return (
    <div>
      <HeaderClient />
      <main>{children}</main>
      <FooterClient />
    </div>
  );
}
