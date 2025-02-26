import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "api/product.api";
import React from "react";
import Table from "./Table";
import { Product } from "types/product";
import { useNavigate } from "react-router-dom";
const ProductList: React.FC = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["products"], // need to move this constat later
    queryFn: getAllProducts,
  });
  const nagivation = useNavigate();

  const columns: {
    key: keyof Product;
    label: string;
    sortable?: boolean;
  }[] = [
    { key: "id", label: "ID", sortable: true },
    { key: "category", label: "Category" },
    { key: "minimumOrderQuantity", label: "Min" },
    { key: "price", label: "Price", sortable: true },
    { key: "rating", label: "Rating" },
    { key: "availabilityStatus", label: "Stock" },
    // { key: "availabilityStatus", label: "Status" },
    { key: "title", label: "Title", sortable: true },
  ];
  if (isLoading) return <div>Loading...</div>;
  const onRowClick = (row: Product) => {
    nagivation(`/product/${row.id}`);
  };
  return (
    <div style={{ padding: "20px", margin: "20px" }}>
      <h2>Product List</h2>
      <Table<Product>
        data={data?.products}
        columns={columns}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default ProductList;
