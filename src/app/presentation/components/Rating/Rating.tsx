import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Box, Typography } from "@mui/material";

function Rating({ rating }: { rating: Rating }): JSX.Element {
  //Contar avaliação do produto
  const productRating = (rate: number) => {
    const maxRating = 5;
    const ratingArray: Array<JSX.Element> = [];
    for (let i = 0; i < maxRating; i++) {
      if (i < rate) {
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
    <Box sx={{ mt: "auto", display: "flex" }}>
      {productRating(Math.round(parseFloat(rating ? rating.rate : "0"))).map(
        (star) => {
          return star;
        }
      )}
      <Typography variant="body2" sx={{ ml: 1, lineHeight: "1.5" }}>
        {rating?.count}
      </Typography>
    </Box>
  );
}

export default Rating;
