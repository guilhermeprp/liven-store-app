import * as Icon from "@mui/icons-material";
import Cart from "../Cart/Cart";
import Logo from "../../../assets/logo.png";
import React from "react";
import SideBar from "../SideBar/SideBar";
import { breakpoint } from "../../../style/breakpoint";
import { Dropdown } from "../Dropdown/Dropdown";
import {
  AppBar,
  Box,
  IconButton,
  Input,
  Portal,
  Stack,
  Toolbar,
} from "@mui/material";

function NavBar(): JSX.Element {
  const matches = breakpoint(900);

  const [openSideBar, setOpenSideBar] = React.useState(false);

  return (
    <>
      <Portal container={document.body}>
        {openSideBar && (
          <SideBar
            handleClose={() => {
              setOpenSideBar(false);
            }}
            open={openSideBar}
          ></SideBar>
        )}
      </Portal>

      <AppBar id="mainNav" sx={{ backgroundColor: "primary.dark" }}>
        <Box sx={{ maxWidth: 1190, width: "100%", m: "auto" }}>
          <Toolbar sx={{ gap: "10px" }}>
            {!matches && (
              <IconButton
                sx={{ color: "primary.contrastText" }}
                onClick={() => setOpenSideBar(true)}
              >
                <Icon.Menu />
              </IconButton>
            )}

            <Box sx={{ width: "50px", "& > img": { width: "50px" } }}>
              <img src={Logo} alt="logo" className="logo" />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Input
                placeholder="Pesquisar"
                inputProps={{ "aria-label": "pesquisar" }}
                sx={{
                  width: "inherit",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  p: "0 10px",
                  borderRadius: "5px",
                }}
              />
            </Box>
            <IconButton sx={{ color: "primary.contrastText" }}>
              <Icon.Person />
            </IconButton>
            <Cart></Cart>
          </Toolbar>

          {matches && (
            <Stack direction="row" sx={{ justifyContent: "center" }}>
              <>
                <Dropdown label="Casas" />
                <Dropdown label="Banheiro" />
                <Dropdown label="Cozinha" />
                <Dropdown label="Decoração" />
              </>
            </Stack>
          )}
        </Box>
      </AppBar>
    </>
  );
}

export default NavBar;
