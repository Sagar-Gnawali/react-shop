// import { Container } from "@/components/Container";
// import ProductList from "@/components/ProductList";
import { Container } from "components/Container";
import ProductList from "components/ProductList";

export const Product = () => {
  return (
    <Container
      leftElement={<p>Please select a product from the list.</p>}
      rightElement={<ProductList />}
    />
  );
};
