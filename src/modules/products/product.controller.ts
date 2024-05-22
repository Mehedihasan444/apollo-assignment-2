import { Request, Response } from "express";
import { ProductServices } from "./product.service";

//
const createProduct = async (req: Request, res: Response) => {
  try {
      const productData = req.body;
  const result = await ProductServices.createProduct(productData);

  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not post product!",
      data: error,
    });
  }

};

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

//
const getAProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAProduct(req.params.productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products!",
      data: error,
    });
  }
};
//
const updateAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updateData = req.body;

    const result = await ProductServices.updateAProduct(productId, updateData);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not update product!",
      data: error,
    });
  }
};
//
const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteAProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not delete product!",
      data: error,
    });
  }
};
//
const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const products = await ProductServices.searchProducts(searchTerm);

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products!",
      data: error,
    });
  }
};

// ------------------------========================-----------------------------
export const ProductControllers = {
  createProduct,
  // getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
  searchProducts,
};
