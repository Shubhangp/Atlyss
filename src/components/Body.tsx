import React from "react";
import { Outlet } from "react-router-dom";

const Body: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Body;