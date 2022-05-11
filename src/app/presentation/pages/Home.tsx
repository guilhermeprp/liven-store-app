import NavBar from "../components/NavBar/NavBar";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import Loading from "./Loading";
import Error404 from "./Error404";
import Card from "../components/Card/Card";
import { RootState } from "../../../data/store";
import { useSelector } from "react-redux";
import { loadProducts } from "../../../infra/loadBalance";

export default function Home(): ReactElement {
  const loadingState = useSelector((state: RootState) => state.loadingState);
  const productsData = useSelector(
    (state: RootState) => state.manageProductsData
  );

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    loadProducts();
  }, []);

  if (error) {
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
          sx={{ flexWrap: "wrap", maxWidth: 1190, m: "0 auto", pt: "3rem" }}
        >
          {productsData.value.map((product: any) => (
            <Card key={product.id} product={product} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
