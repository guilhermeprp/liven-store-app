import {
  CardActionArea,
  Box,
  Card as CardTemplate,
  CardMedia,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
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

interface Props {
  product: Product;
  key: string;
}

const Card: FunctionComponent<Props> = ({ product }): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const addToCart = (productInfos: Product) => {
    const cart = getLocalStorage("cart");

    if (checkDuplicatedItems(cart, "id", product.id)) return;
    cart.push(productInfos);
    setLocalStorage("cart", cart);
    dispatch(refreshCartCount());
    dispatch(getCartProducts());
  };

  const productRating = (rating: number) => {
    const maxRating = 5;
    const ratingArray: Array<JSX.Element> = [];
    for (let i = 0; i < maxRating; i++) {
      if (i < rating) {
        ratingArray.push(
          <StarIcon key={i} fontSize="small" color={"warning"} />
        );
      } else {
        ratingArray.push(<StarOutlineIcon key={i} fontSize="small" />);
      }
    }
    return ratingArray;
  };

  return (
    <CardTemplate
      key={product.id}
      sx={{
        maxWidth: 285,
        width: "100%",
        backgroundColor: "primary.main",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
        onClick={() => {
          addToCart({
            id: product.id,
            image: product.image,
            price: product.price,
            title: product.title,
            quantity: 1,
          });
        }}
      >
        <Box
          sx={{
            backgroundColor: "text.primary",
            width: "100%",
            height: "284px",
            p: 2,
            border: "1rem solid",
            borderColor: "primary.main",
            borderRadius: "22px",
          }}
        >
          <CardMedia
            image={product.image}
            sx={{
              backgroundSize: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <CardContent sx={{ width: "100%", flex: 1 }}>
          <Stack sx={{ height: "100%" }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ lineHeight: "1" }}>
                  <sup>$</sup>
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: "1" }}>
                  {product.price}
                </Typography>
              </Box>
              <Typography variant="body2">{product.title}</Typography>
            </Box>

            <Box sx={{ mt: "auto", display: "flex" }}>
              {productRating(
                Math.round(
                  parseFloat(product.rating ? product.rating.rate : "0")
                )
              ).map((star) => {
                return star;
              })}
              <Typography variant="body2" sx={{ ml: 1, lineHeight: "1.5" }}>
                {product.rating?.count}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </CardTemplate>
  );
};

export default Card;
