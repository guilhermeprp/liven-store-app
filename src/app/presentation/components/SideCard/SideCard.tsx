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
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { RootState } from "../../../../data/store";
import {
  changeProductQuantity,
  removeProductFromCart,
} from "../../utils/cartManagement";

interface Props {
  product: Product;
  key: string;
}

export const SideCard: FunctionComponent<Props> = ({
  product,
}): JSX.Element => {
  const products = useSelector((state: RootState) => state.cartItemsReducer);

  return (
    <Card
      sx={{ position: "relative", backgroundColor: "primary.light", pr: 8 }}
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
          <Typography>{product.title}</Typography>
          <Stack direction="row" sx={{ marginTop: "auto" }}>
            <Button
              sx={{ color: "white" }}
              onClick={() => changeProductQuantity(+1, products, product.id)}
            >
              <AddIcon />
            </Button>
            <Typography sx={{ p: "0 1rem", alignSelf: "center" }}>
              {product.quantity}
            </Typography>
            <Button
              sx={{ color: "white" }}
              onClick={() => changeProductQuantity(-1, products, product.id)}
              disabled={product.quantity === 1}
            >
              <RemoveIcon />{" "}
            </Button>
          </Stack>
        </Stack>
        <IconButton
          onClick={() => removeProductFromCart(products, product.id)}
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
