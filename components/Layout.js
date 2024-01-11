import React from "react";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Toaster />
    </div>
  );
}

export default Layout;
