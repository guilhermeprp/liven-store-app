import { getApi } from "../data/API";
import { PRODUCTS_ENDPOINT } from "../infra/endpoints";
import { loadProducts } from "../infra/loadBalance";

const rightEndpoint = PRODUCTS_ENDPOINT;
const wrongEndpoint = "prods";

describe("Products", () => {
  test("should get products from api", async () => {
    try {
      const products = await getApi(rightEndpoint);
      expect(products.data).toBeDefined();
    } catch (error) {
      expect(error).toBe(undefined);
    }
  });

  test("should thrown error 404 from api", async () => {
    try {
      await getApi(wrongEndpoint);
    } catch (error: any) {
      expect(error.message).toBe("Request failed with status code 404");
    }
  });

  test("should not load products", async () => {
    try {
      const products = await loadProducts(wrongEndpoint);
      expect(products).toBe(undefined);
    } catch (error: any) {
      expect(error.message).toBe(
        "AxiosError: Request failed with status code 404"
      );
    }
  });
});
