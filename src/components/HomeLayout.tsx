import React from "react";
import "../Css/homeLayout.css";

import HomeNavbar from "./HomeNavbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="home-layout">
      {/* <h1>Jorn van Bree</h1> */}

      {<HomeNavbar />}
      {children}
    </div>
  );
};

export default HomeLayout;
