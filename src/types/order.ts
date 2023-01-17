import { IProduct } from "./product";

export interface IOrderProduct extends IProduct {
  totalPrice: number;
  totalCount: number;
}

export interface IOrder {
  id: string;
  createdAt: Date;
  totalPrice: number;
  items: IOrderProduct[];
}
