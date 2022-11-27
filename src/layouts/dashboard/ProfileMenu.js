import { Avatar, Box, Fade, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { Profile_Menu } from "../../data";

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const anchorElOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const anchorElClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Avatar
                id="profile-positioned-button"
                aria-controls={openMenu ? "profile-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                alt={faker.name.fullName()}
                src={faker.image.avatar()}
                onClick={anchorElOpen}
            />
            <Menu
                MenuListProps={{
                    "aria-labelledby": "fade-button",
                }}
                TransitionComponent={Fade}
                id="profile-positioned-menu"
                aria-labelledby="profile-positioned-button"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={anchorElClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <Box p={1}>
                    <Stack spacing={1}>
                        {Profile_Menu.map((el) => (
                            <MenuItem onClick={anchorElClose} key={el.title}>
                                <Stack
                                    sx={{ width: 100 }}
                                    direction={"row"}
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >
                                    <span>{el.title}</span>
                                    {el.icon}
                                </Stack>
                            </MenuItem>
                        ))}
                    </Stack>
                </Box>
            </Menu>
        </>
    );
};

export default ProfileMenu;