import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico"
import { Nav_Buttons, Nav_Setting } from "../../data";
import useSettings from "../../hooks/useSettings";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DashboardLayout = () => {

  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const navIcons = (el) => (
    el.index == selected ?
      <Box sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 1.5
      }}>
        <IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}>
          {el.icon}
        </IconButton>
      </Box>
      : <IconButton
        onClick={() => {
          setSelected(el.index);
        }
        }
        sx={{ width: "max-content", color: theme.palette.mode === "dark" ? theme.palette.text.primary : "#000" }} key={el.index}>
        {el.icon}
      </IconButton>
  );

  return (
    <>
      <Box
        p={2}
        sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: 100 }}>
        <Stack direction={"column"} alignItems={"center"} height={"100%"} justifyContent={"space-between"} spacing={2}>
          <Stack alignItems={"center"} width={"100%"} spacing={4}>
            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5
            }}>
              <img src={logo} alt={"Chat App"} />
            </Box>
            <Stack sx={{ width: "max-content" }} alignItems={"center"} direction={"column"} spacing={3}>
              {Nav_Buttons.map((el) => navIcons(el))}
              <Divider sx={{ width: "48px" }} />
              {Nav_Setting.map((el) => navIcons(el))}
            </Stack>
          </Stack>
          <Stack spacing={3}>
            <AntSwitch onChange={() => {
              onToggleMode();
            }
            }
              defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
