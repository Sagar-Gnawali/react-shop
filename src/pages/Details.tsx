import { useQuery } from "@tanstack/react-query";
import { getProductById } from "api/product.api";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  const productId = parseInt(id ? id : "");
  const { isLoading, data } = useQuery({
    queryKey: ["bookingDetails", id],
    queryFn: () => getProductById(productId),
  });
  if (isLoading) return <p>Loading...</p>;
  console.log("data>>>", data);
  return <p>Here we put details</p>;
};
