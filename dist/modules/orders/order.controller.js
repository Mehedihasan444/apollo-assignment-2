"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const product_model_1 = require("../products/product.model");
const order_validation_1 = __importDefault(require("./order.validation"));
//create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const { productId, quantity } = orderData;
        // data validation using zod
        const validationResult = order_validation_1.default.parse(orderData);
        // Find the product to check inventory
        const product = yield product_model_1.Product.findById(productId);
        //
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
        yield product.save();
        //
        const result = yield order_service_1.OrderServices.CreateOrder(validationResult);
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not post order!",
            data: error,
        });
    }
});
//get order based on email
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const orders = yield order_service_1.OrderServices.getOrders(email);
        res.json({
            success: true,
            message: "Orders fetched successfully!",
            data: orders,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
            data: error,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getOrders,
};
