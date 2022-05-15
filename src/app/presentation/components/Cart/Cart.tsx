import * as Icon from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Badge, Box, Button, IconButton, Stack } from "@mui/material";
import { cartDropStyles, finishOrderButtonStyle } from "./Cart.style";
import { RootState } from "../../../../data/store";
import { SideCard } from "../SideCard/SideCard";
import { useSelector } from "react-redux";

function Cart(): JSX.Element {
  const [products, countItems] = useSelector((state: RootState) => [
    state.cartItemsReducer,
    state.countCartItemsReducer,
  ]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!products.length) {
      setOpen(false);
    }
  }, [products]);

  return (
    <Box>
      <IconButton
        sx={{ color: "primary.contrastText" }}
        onClick={() => setOpen((state) => !state)}
      >
        <Badge badgeContent={countItems} color="error">
          <Icon.ShoppingCart />
        </Badge>
      </IconButton>

      {products.length > 0 && (
        <Box sx={cartDropStyles(open)}>
          <Box
            sx={{
              maxHeight: "calc(70vh - 100px)",
              overflowY: "auto",
            }}
          >
            <Stack gap={1}>
              {products.map((product: Product) => (
                <SideCard product={product} key={product.id} />
              ))}
            </Stack>
          </Box>

          <Button sx={finishOrderButtonStyle}>Fechar Pedido</Button>
        </Box>
      )}
    </Box>
  );
}

export default Cart;
