import React, { ReactElement, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import * as Icon from "@mui/icons-material";

export function Dropdown({ label }: { label: string }): ReactElement {
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
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "135px",
          maxHeight: open ? "15rem" : "0",
          overflow: "hidden",
          backgroundColor: "primary.light",
          padding: open ? "0.5rem 0" : "0",
          borderRadius: "4px",
          boxShadow: "0 0 3px 0 #07101a",
          transition: "0.3s ease",
        }}
      >
        <Stack direction="column" alignItems="center">
          <Typography>Acessórios</Typography>
          <Typography>Acessórios</Typography>
          <Typography>Acessórios</Typography>
          <Typography>Acessórios</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
