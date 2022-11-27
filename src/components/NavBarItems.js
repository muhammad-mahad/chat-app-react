import React from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NavIcons = (el, curSelection, setSelectioon) => {
    const theme = useTheme();
    return (
        <>
            {el.index === curSelection ?
                <Box
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5
                    }}
                    p={1}>
                    <IconButton
                        sx={{
                            width: "max-content",
                            color: "#fff"
                        }}
                        key={el.index}>
                        {el.icon}
                    </IconButton>
                </Box>
                : <IconButton
                    onClick={() => {
                        setSelectioon(el.index);
                    }}
                    sx={{
                        width: "max-content",
                        color: theme.palette.mode === "dark" ? theme.palette.text.primary : "#080707"
                    }}
                    key={el.index}>
                    {el.icon}
                </IconButton>
            }
        </>
    );
};

export default NavIcons;