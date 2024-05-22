import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { Product } from "../products/product.model";

//
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const { email, productId, price, quantity } = orderData;

    // Find the product to check inventory
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check if the ordered quantity exceeds available quantity
    if (product.inventory.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // Update the product inventory
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();

    const result = await OrderServices.CreateOrder(orderData);

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not post order!",
      data: error,
    });
  }
};
//
const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const orders = await OrderServices.getOrders(email);
    res.json({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not fetch orders!",
      data: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getOrders,
};
