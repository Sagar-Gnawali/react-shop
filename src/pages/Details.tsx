import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "services/product.service";
import { Policy } from "components/Policy";
import { Reviewss } from "components/Reviews";
import { ShippingInfo } from "components/ShippingInfo";
import { Specifications } from "components/Specification";
import { StockIndicator } from "components/StockIndicator";
import Rating from "components/Rating";
import ImageContainer from "components/Image";

export const Details = () => {
  const { id } = useParams();
  const productId = parseInt(id ? id : "");
  const { isLoading, data } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductById(productId),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="product-container">
      <div className="product-container__grid">
        <div>
          <p className="product-container__breadcrumb">
            Product &gt; {data?.category} &gt; {data?.brand}
          </p>
          <ImageContainer src={data?.images[0]} height="60%" width="70%" />
          <ImageContainer
            src={data?.thumbnail}
            height="100px"
            width="100px"
            isThumbnail
          />
          <div className="specification-container">
            <h2>Specifications</h2>
            <Specifications weight={data?.weight} />
          </div>
        </div>
        <div>
          <div className="flex">
            <h3>{data?.title}</h3>
            <ShippingInfo shipText={data?.shippingInformation} />
          </div>
          <div className="product-container__description">
            <h4>Description</h4>
            <p>{data?.description}</p>
          </div>
          <div className="product-container__rating">
            <Rating rating={data?.rating} />
            <p>{data?.reviews?.length || 0} Ratings</p>
          </div>
          <div className="product-container__price">
            <h4>
              Price: <span>Rs. {data?.price}</span>
            </h4>
            <StockIndicator
              stock={data?.stock}
              status={data?.availabilityStatus}
            />
          </div>
          <div>
            <div className="policy-container">
              <h2>Return & Warranty</h2>
              <Policy
                returnPolicy={data?.returnPolicy}
                warranty={data?.warrantyInformation}
              />
            </div>
          </div>
          <div className="product-container__reviews">
            <h4>Reviews</h4>
            {data?.reviews?.map((review, index) => (
              <Reviewss key={index} reviews={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
