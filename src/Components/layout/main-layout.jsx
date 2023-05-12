import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
