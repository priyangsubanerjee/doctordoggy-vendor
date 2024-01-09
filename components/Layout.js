import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="pt-12 lg:pt-16">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
