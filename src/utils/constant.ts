import { Product } from "types/product";

export const BASE_URL = "https://dummyjson.com/products";

export const PRODUCT_KEY = {
  all: "products",
  productDetails: "productDetails",
};

export const PRODUCT_COLUMNS: {
  key: keyof Product;
  label: string;
  sortable?: boolean;
}[] = [
  { key: "brand", label: "Brand", sortable: false },
  { key: "price", label: "Price", sortable: false },
  { key: "availabilityStatus", label: "Stock" },
];
export const ROUTE_PATHS = {
  HOME: "/",
};
