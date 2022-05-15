/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from "@mui/material";

export const breakpoint = (screenSize: number) =>
  useMediaQuery(`(min-width:${screenSize}px)`);
