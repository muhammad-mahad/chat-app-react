import { Box, Divider, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Nav_Setting } from "../../data";
import NavIcons from "../../components/NavBarItems";
import AntSwitch from "../../components/AntSwitch";
import ProfileMenu from "./ProfileMenu";

const SideNav = () => {
    const theme = useTheme();
    const [selectedTab, setSelectedTab] = useState(0);
    const { onToggleMode } = useSettings();
    return (
        <>
            <Box
                sx={{
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? "#F0F4FA"
                            : theme.palette.background.paper,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    height: "100vh",
                    width: 100
                }}
            >
                <Stack
                    py={3}
                    alignItems={"center"}
                    height={"100%"}
                    justifyContent={"space-between"}
                >
                    <Stack
                        alignItems={"center"}
                        spacing={4}
                    >
                        <Box sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5
                        }}>
                            <img src={Logo} alt={"Chat App"} />
                        </Box>
                        <Stack
                            sx={{ width: "max-content" }}
                            alignItems={"center"}
                            direction={"column"}
                            spacing={3}
                        >
                            {Nav_Buttons.map((el) => NavIcons(el, selectedTab, setSelectedTab))}
                            <Divider sx={{ width: "48px" }} />
                            {Nav_Setting.map((el) => NavIcons(el, selectedTab, setSelectedTab))}
                        </Stack>
                    </Stack>
                    <Stack spacing={4}>
                        <AntSwitch
                            onChange={() => {
                                onToggleMode();
                            }}
                            defaultChecked />
                        <ProfileMenu />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default SideNav;