import { Container } from "components/Container";
import { ProductCard } from "components/ProductCard";
import ProductList from "components/ProductList";
import { useState } from "react";
import { Product } from "types/product";

export const ProductPage = () => {
  const [productDetails, setProductDetails] = useState<Product | undefined>();
  const onProductClick = (pd: Product) => {
    setProductDetails(pd);
  };
  return (
    <Container
      leftElement={<ProductCard {...(productDetails as Product)} />}
      rightElement={<ProductList onRowEvent={onProductClick} />}
    />
  );
};
