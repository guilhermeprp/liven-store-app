import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import * as Icon from "@mui/icons-material";
import { dropdownStyle } from "./Dropdown.style";

export function Dropdown({ label }: { label: string }): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        endIcon={open ? <Icon.ArrowDropUp /> : <Icon.ArrowDropDown />}
        sx={{
          color: `${open ? "secondary.main" : "primary.contrastText"}`,
        }}
      >
        {label}
      </Button>
      <Box sx={dropdownStyle(open)}>
        <Stack direction="column" alignItems="center">
          <Typography>Exemplo</Typography>
          <Typography>Exemplo</Typography>
          <Typography>Exemplo</Typography>
          <Typography>Exemplo</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
