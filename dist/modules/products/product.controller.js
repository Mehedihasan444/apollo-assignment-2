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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
//CREATE PRODUCT
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // data validation using zod
        const validationResult = product_validation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.createProduct(validationResult);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not post product!",
            data: error,
        });
    }
});
//
// const getAllProducts = async (req: Request, res: Response) => {
//   try {
//     const result = await ProductServices.getAllProducts();
//     res.status(200).json({
//       success: true,
//       message: "Products fetched successfully!",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch products!",
//       data: error,
//     });
//   }
// };
//get a single product
const getAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAProduct(req.params.productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product not found!",
            data: error,
        });
    }
});
//update a product
const updateAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updateData = req.body;
        const result = yield product_service_1.ProductServices.updateAProduct(productId, updateData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not update product!",
            data: error,
        });
    }
});
// delete a product
const deleteAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.deleteAProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not delete product!",
            data: error,
        });
    }
});
// search products
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const products = yield product_service_1.ProductServices.searchProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: products,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fetch products!",
            data: error,
        });
    }
});
// ------------------------========================-----------------------------
exports.ProductControllers = {
    createProduct,
    // getAllProducts,
    getAProduct,
    updateAProduct,
    deleteAProduct,
    searchProducts,
};
