export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  sku: string;
  weight: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  thumbnail: string
}

export interface QuickItem{
  id:number;
  image: string;
  title:string;
  price:number;
}

export interface CardBsn {
  id:number;
  image: string;
  title: string;
  price: number;
}