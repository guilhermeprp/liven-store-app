import Card from "../components/Card/Card";
import Error404 from "./Error404";
import Loading from "./Loading";
import NavBar from "../components/NavBar/NavBar";
import React, { ReactElement, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { loadProducts } from "../../../infra/loadBalance";
import { PRODUCTS_ENDPOINT } from "../../../infra/endpoints";
import { RootState } from "../../../data/store";
import { useSelector } from "react-redux";

export default function Home(): ReactElement {
  const [loadingState, productsData, error] = useSelector(
    (state: RootState) => [
      state.loadingState,
      state.manageProductsData,
      state.error404,
    ]
  );

  useEffect(() => {
    loadProducts(PRODUCTS_ENDPOINT);
  }, []);

  if (error.value) {
    return <Error404 />;
  }

  while (loadingState.value) {
    return <Loading />;
  }

  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      <NavBar />
      <Box sx={{ mt: "4rem" }}>
        <Stack
          direction="row"
          gap={2}
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 1190,
            m: "0 auto",
            p: "3rem 0 ",
          }}
        >
          {productsData.map((product: Product) => (
            <Card key={product.id} product={product} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
