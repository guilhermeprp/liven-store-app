import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FunctionComponent } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { RootState } from "../../../../data/store";
import { updateCart } from "../../../../controllers/cart/cart.action";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  IchangeProductQuantity,
  IremoveProductFromCart,
} from "../../../../model/cartActions.model";
import {
  sideCardStyle,
  sideMediaWrapperStyle,
  sideMediaStyle,
  sideCardTitleStyle,
  sideCardDeleteButtonStyle,
} from "./SideCard.style";

interface Props {
  product: Product;
  key: string;
}

export const SideCard: FunctionComponent<Props> = ({
  product,
}): JSX.Element => {
  const products: Product[] = useSelector(
    (state: RootState) => state.cartItemsReducer
  );

  const productsQuantityAction = (
    operation: number
  ): IchangeProductQuantity => ({
    operation: operation,
    cart: {
      products: products,
      id: product.id,
    },
  });

  return (
    <Card sx={sideCardStyle}>
      <Stack direction="row" gap={1}>
        <Box sx={sideMediaWrapperStyle}>
          <CardMedia image={product.image} sx={sideMediaStyle} />
        </Box>
        <Stack sx={{ flex: "1", p: "10px 0" }}>
          <Typography>${product.price}</Typography>
          <Typography sx={sideCardTitleStyle}>{product.title}</Typography>
          <Stack direction="row" sx={{ marginTop: "auto" }}>
            <Button
              sx={{ color: "white" }}
              onClick={() =>
                updateCart("ChangeProductQuantity", productsQuantityAction(+1))
              }
            >
              <AddIcon />
            </Button>
            <Typography sx={{ p: "0 1rem", alignSelf: "center" }}>
              {product.quantity}
            </Typography>
            <Button
              sx={{ color: "white" }}
              onClick={() =>
                updateCart("ChangeProductQuantity", productsQuantityAction(-1))
              }
              disabled={product.quantity === 1}
            >
              <RemoveIcon />
            </Button>
          </Stack>
        </Stack>
        <IconButton
          id={`remove-from-cart-${product.id}`}
          onClick={() =>
            updateCart("RemoveProduct", {
              cart: {
                products: products,
                id: product.id,
              },
            } as IremoveProductFromCart)
          }
          sx={sideCardDeleteButtonStyle}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};
