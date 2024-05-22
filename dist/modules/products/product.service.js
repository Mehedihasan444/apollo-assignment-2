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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
//
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
//
// const getAllProducts = async () => {
//   const result = await Product.find();
//   return result;
// };
//get a single product
const getAProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(productId);
    return result;
});
// update a product
const updateAProduct = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(productId, { $set: updateData }, { new: true });
    return result;
});
// delete a product
const deleteAProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(productId);
    return result;
});
// search products
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, 'i');
    const products = yield product_model_1.Product.find({
        $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { tags: { $regex: regex } }
        ]
    });
    return products;
});
// ----------------------==============--------------------------
exports.ProductServices = {
    createProduct,
    //   getAllProducts,
    getAProduct,
    updateAProduct,
    deleteAProduct,
    searchProducts
};
