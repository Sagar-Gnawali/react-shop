interface Reviews {
  rating: number;
  comment: string;
  reviewerEmail: string;
  reviewerName: string;
}
export interface Product {
  id: number;
  title: string;
  availabilityStatus: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  minimumOrderQuantity: number;
  returnPolicy: string;
  warrantyInformation: string;
  reviews: Reviews[];
  weight: number;
  shippingInformation: string;
}

export interface ProductsResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
