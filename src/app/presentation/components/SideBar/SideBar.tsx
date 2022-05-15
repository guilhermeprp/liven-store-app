import * as Icon from "@mui/icons-material";
import React from "react";
import { Backdrop, Box, IconButton, Stack, Typography } from "@mui/material";
import { backDropStyles, sideBarStyle } from "./SideBar.style";

function SideBar({
  handleClose,
  open,
}: {
  handleClose: () => void;
  open: boolean;
}): JSX.Element {
  return (
    <>
      <Backdrop
        sx={backDropStyles}
        open={open}
        onClick={handleClose}
      ></Backdrop>
      <Box sx={sideBarStyle}>
        <IconButton
          sx={{ color: "primary.contrastText" }}
          onClick={handleClose}
        >
          <Icon.Close />
        </IconButton>
        <Stack>
          <Typography variant="h6" color="primary.contrastText">
            Under construction
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default SideBar;
