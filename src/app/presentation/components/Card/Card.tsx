import {
  CardActionArea,
  Box,
  Card as CardTemplate,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import {
  getCartProducts,
  refreshCartCount,
} from "../../../../controllers/cart/cart.action";
import { getLocalStorage } from "../../../../infra/localStorage/getLocalStorage";
import { setLocalStorage } from "../../../../infra/localStorage/setLocalStorage";
import { checkDuplicatedItems } from "../../utils/checkDuplicates";
import { AppDispatch } from "../../../../data/store";
import {
  addToCartButton,
  cardActionAreaStyle,
  cardMediaStyle,
  cardMediaWrapperStyle,
  cardTemplateStyle,
} from "./Card.style";
import Rating from "../Rating/Rating";

interface Props {
  product: Product;
  key: string;
}

const Card: FunctionComponent<Props> = ({ product }): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const { id, image, price, title, rating } = product;

  const addToCart = (productInfos: Product) => {
    const cart = getLocalStorage("cart");

    if (checkDuplicatedItems(cart, "id", id)) return;
    cart.push(productInfos);
    setLocalStorage("cart", cart);
    dispatch(refreshCartCount());
    dispatch(getCartProducts());
  };

  return (
    <CardTemplate id={`card-product-${id}`} key={id} sx={cardTemplateStyle}>
      <Button
        id={`add-to-cart-${id}`}
        className="add-to-cart"
        sx={addToCartButton}
        onClick={() => {
          addToCart({ ...product, quantity: 1 });
        }}
      >
        Adicionar ao Carrinho
      </Button>
      <CardActionArea sx={cardActionAreaStyle}>
        <Box sx={cardMediaWrapperStyle}>
          <CardMedia image={image} sx={cardMediaStyle} />
        </Box>
        <CardContent sx={{ width: "100%", flex: 1 }}>
          <Stack sx={{ height: "100%" }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ lineHeight: "1" }}>
                  <sup>$</sup>
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: "1" }}>
                  {price}
                </Typography>
              </Box>
              <Typography variant="body2">{title}</Typography>
            </Box>
            <Rating rating={rating as Rating}></Rating>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CardTemplate>
  );
};

export default Card;
