"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// create product
router.post("/", product_controller_1.ProductControllers.createProduct);
// get all products
// router.get('/',ProductControllers.getAllProducts)
// get a single product
router.get("/:productId", product_controller_1.ProductControllers.getAProduct);
// Update a product
router.put("/:productId", product_controller_1.ProductControllers.updateAProduct);
// delete a product
router.delete("/:productId", product_controller_1.ProductControllers.deleteAProduct);
// search product
router.get("/", product_controller_1.ProductControllers.searchProducts);
exports.ProductRoutes = router;
