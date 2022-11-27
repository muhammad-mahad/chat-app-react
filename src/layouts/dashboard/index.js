import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import SideNav from "./SideNav";

const DashboardLayout = () => {
  const isDesktop = useResponsive("up", "md");
  return (
    <>
    <Stack direction={"row"}>
      {isDesktop ? <SideNav /> : null}
      <Outlet />
    </Stack>
    </>
  );
};

export default DashboardLayout;
