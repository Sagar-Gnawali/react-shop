interface Reviews {
  rating: number;
  comment: string;
  reviewerEmail: string;
  reviewerName: string;
}
interface Meta {
  createdAt?: Date;
  updatedAt?: Date;
  barcode?: string;
  qrCode?: string;
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
  sku?: string;
  shippingInformation: string;
  meta?: Meta;
}

export interface ProductsResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}
