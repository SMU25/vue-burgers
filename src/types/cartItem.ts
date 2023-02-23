import { IProduct } from "./product";

export interface ICartItem {
  product: IProduct;
  totalPrice: number;
  totalCount: number;
}
