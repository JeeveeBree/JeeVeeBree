import React from "react";
import "../Css/homeLayout.css";

import HomeNavbar from "./HomeNavbar";

const HomeLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="home-layout">
      {/* <h1>Jorn van Bree</h1> */}
      {<HomeNavbar />}
      {/* <div className="home-content">{children}</div> */}
      {children}
    </div>
  );
};

export default HomeLayout;
