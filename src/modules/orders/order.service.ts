import { TOrder } from "./order.interface";
import { Order } from "./order.model";


// create order
const CreateOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
// get order based 
const getOrders = async (email: string) => {
  // check whether query is present or not
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
