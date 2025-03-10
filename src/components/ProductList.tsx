import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "services/product.service";
import { Product } from "types/product";
import Table from "./Table";
import { PRODUCT_COLUMNS, PRODUCT_KEY } from "utils/constant";

interface ProductListProps {
  onRowEvent: (data: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onRowEvent }) => {
  const { isLoading, data } = useQuery({
    queryKey: [PRODUCT_KEY.all],
    queryFn: getAllProducts,
  });
  const nagivation = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <p className="">OOPS! No data found</p>;
  const onRowClick = (row: Product) => {
    onRowEvent(row);
    // nagivation(`/product/${row.id}`);
  };
  return (
    <div style={{ padding: "20px", margin: "20px" }}>
      <h2>Product List</h2>
      <Table<Product>
        data={data?.products}
        columns={PRODUCT_COLUMNS}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default ProductList;
