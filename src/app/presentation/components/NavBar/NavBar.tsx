import * as Icon from "@mui/icons-material";
import Cart from "../Cart/Cart";
import Logo from "../../../assets/logo.png";
import React from "react";
import SideBar from "../SideBar/SideBar";
import { AppBar, Box, IconButton, Input, Portal, Toolbar } from "@mui/material";
import { breakpoint } from "../../../style/breakpoint";
import { Dropdown } from "../Dropdown/Dropdown";

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

          {matches && (
            <>
              <Dropdown label="Casas" />
              <Dropdown label="Banheiro" />
              <Dropdown label="Cozinha" />
              <Dropdown label="Decoração" />
            </>
          )}

          <Box sx={{ ml: "auto" }}>
            <Input
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "pesquisar" }}
            />
          </Box>
          <IconButton sx={{ color: "primary.contrastText" }}>
            <Icon.Person />
          </IconButton>
          <Cart></Cart>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
