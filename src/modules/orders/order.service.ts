import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const CreateOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getOrders = async (email: string) => {
  if (email) {
    const result = await Order.find({ email: email });
    return result;
  }
  const result = await Order.find();
  return result;
};

// --------------------===============------------------
export const OrderServices = {
  CreateOrder,
  getOrders,
};
