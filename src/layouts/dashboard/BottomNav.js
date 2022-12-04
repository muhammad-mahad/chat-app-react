import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
import { Nav_Buttons } from '../../data';
import ProfileMenu from './ProfileMenu';
import NavIcons from '../../components/NavBarItems';

const BottomNav = () => {
    const theme = useTheme();
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Box
            p={2}
            sx={{
                zIndex: 10,
                position: "absolute",
                bottom: 0,
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                width: "100vw"
            }}>
            <Stack
                sx={{ width: "100%" }}
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                spacing={2}
                p={2}>
                {Nav_Buttons.map((el) => NavIcons(el, selectedTab, setSelectedTab))}
                <ProfileMenu />
            </Stack>
        </Box>
    );
}

export default BottomNav;