import React from "react";
import Navbar from "../components/Navbar";
import "../Css/mainLayout.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="page-content">{children}</div>
      <footer className="footer">
        <p>© 2025 Jorn van Bree</p>
      </footer>
    </>
  );
};

export default MainLayout;
