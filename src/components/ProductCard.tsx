import { Product } from "types/product";
import { StockIndicator } from "./StockIndicator";
import { useNavigate } from "react-router-dom";

export const ProductCard = (props: Product | undefined) => {
  if (!props?.id) return <p>Please select a product from the product lists.</p>;
  const nagivate = useNavigate();
  const product = props;
  return (
    <div>
      <p className="product-container__breadcrumb">
        Product &gt; {product?.category} &gt; {product?.brand}
      </p>
      <div className="product-card">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-thumbnail"
        />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </p>
          <p>
            <strong>Discount:</strong> {product.discountPercentage}%
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>
          <p>
            <strong>Stock:</strong>{" "}
            <StockIndicator
              stock={product?.stock}
              status={product?.availabilityStatus}
            />{" "}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p>
            <strong>Weight:</strong> {product.weight} lbs
          </p>
          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
          <p>
            <strong>Shipping:</strong> {product.shippingInformation}
          </p>
          <p>
            <strong>Availability:</strong> {product.availabilityStatus}
          </p>
          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>
          <p>
            <strong>Minimum Order Quantity:</strong>{" "}
            {product.minimumOrderQuantity}
          </p>
        </div>
        <div className="product-meta">
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(product?.meta?.createdAt ?? "").toLocaleDateString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(product?.meta?.updatedAt ?? "").toLocaleDateString()}
          </p>
          <p>
            <strong>Barcode:</strong> {product?.meta?.barcode}
          </p>
          <img src={product?.meta?.qrCode} alt="QR Code" className="qr-code" />
          <p
            className="product-more-details"
            onClick={() => {
              nagivate(`/product/${product.id}`);
            }}
          >
            See more details..
          </p>
        </div>
      </div>
    </div>
  );
};
