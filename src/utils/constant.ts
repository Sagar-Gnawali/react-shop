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
  { key: "id", label: "ID", sortable: true },
  { key: "category", label: "Category" },
  { key: "minimumOrderQuantity", label: "Min", sortable: true },
  { key: "price", label: "Price", sortable: true },
  { key: "rating", label: "Rating" },
  { key: "availabilityStatus", label: "Stock" },
  { key: "title", label: "Title", sortable: true },
];
export const ROUTE_PATHS = {
  HOME: "/",
};
