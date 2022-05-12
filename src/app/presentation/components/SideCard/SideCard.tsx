import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "../../../../data/store";

interface Props {
  product: Product;
  key: string;
}

export const SideCard: FunctionComponent<Props> = ({
  product,
}): JSX.Element => {
  const products = useSelector((state: RootState) => state.cartItemsReducer);
  const dispatch = useDispatch();

  const removeProductFromCart = (): void => {
    const newArray = [...products.value];

    const newProductsList = newArray.filter(
      (prod: Product) => prod.id !== product.id
    );
  };

  return (
    <Card sx={{ position: "relative", backgroundColor: "primary.main", pr: 8 }}>
      <Stack direction="row" gap={1}>
        <Box
          sx={{
            width: "90px",
            height: "90px",
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
        <Stack>
          <Typography>${product.price}</Typography>
          <Typography>{product.title}</Typography>
          <Stack direction="row">
            <Button sx={{ color: "white" }}>{"-"}</Button>
            <Typography sx={{ p: "0 1rem", alignSelf: "center" }}>
              {product.quantity}
            </Typography>
            <Button sx={{ color: "white" }}>{"+"}</Button>
          </Stack>
        </Stack>
        <IconButton
          onClick={removeProductFromCart}
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
