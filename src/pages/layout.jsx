import React from "react";
import Header from "../ui/header/header";
import Footer from "../ui/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
