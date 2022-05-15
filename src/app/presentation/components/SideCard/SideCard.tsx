import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FunctionComponent } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { RootState } from "../../../../data/store";
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
import { updateCart } from "../../../../controllers/cart/cart.action";

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
    <Card
      sx={{
        position: "relative",
        backgroundColor: "primary.main",
        pr: 8,
        border: "1px solid",
        borderColor: "primary.light",
      }}
    >
      <Stack direction="row" gap={1}>
        <Box
          sx={{
            width: "120px",
            height: "130px",
            p: "10px",
            backgroundColor: "background.default",
          }}
        >
          <CardMedia
            image={product.image}
            sx={{
              backgroundSize: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
        <Stack sx={{ flex: "1", p: "10px 0" }}>
          <Typography>${product.price}</Typography>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "315px",
              overflow: "hidden",
            }}
          >
            {product.title}
          </Typography>
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
              <RemoveIcon />{" "}
            </Button>
          </Stack>
        </Stack>
        <IconButton
          onClick={() =>
            updateCart("RemoveProduct", {
              cart: {
                products: products,
                id: product.id,
              },
            } as IremoveProductFromCart)
          }
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: "primary.contrastText",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};
