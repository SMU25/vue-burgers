import { IProduct } from "./product";

export interface IOrder {
  id: string;
  createdAt: Date;
  totalPrice: number;
  items: IProduct[];
}
