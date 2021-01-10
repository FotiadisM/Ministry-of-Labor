import React from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navbar/NavBar";

export const Middleware: React.FC = ({ children }) => {
  // const backgroundColor1: string = "#e5e5e5";
  const backgroundColor2: string = "#f8f9fa";

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: backgroundColor2 }}
    >
      <NavBar />
      {children}
      <div className="pt-5 mt-auto">
        <Footer />
      </div>
    </div>
  );
};
