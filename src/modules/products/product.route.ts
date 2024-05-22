import express from "express";

import { ProductControllers } from "./product.controller";

const router = express.Router();
// create product
router.post("/", ProductControllers.createProduct);
// get all products
// router.get('/',ProductControllers.getAllProducts)
// get a single product
router.get("/:productId", ProductControllers.getAProduct);
// Update a product
router.put("/:productId", ProductControllers.updateAProduct);
// delete a product
router.delete("/:productId", ProductControllers.deleteAProduct);
// search product
router.get("/", ProductControllers.searchProducts);

export const ProductRoutes = router;
