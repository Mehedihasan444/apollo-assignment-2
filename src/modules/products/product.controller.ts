import { Request, Response } from "express";
import { ProductServices } from "./product.service";

//
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);

  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

//
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();

    res
      .status(200)
      .json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
  } catch (error) {
    res
     .status(500)
     .json({
        success: false,
        message: "Could not fetch products!",
        data: error,
      });
  }
};

// 
const getAProduct= async (req: Request, res:Response) => {
    try {
        const result =await ProductServices.getAProduct(req.params.productId)
        res
        .status(200)
        .json({
          success: true,
          message: "Product fetched successfully!",
          data: result,
        });
    } catch (error) {
        res
     .status(500)
     .json({
        success: false,
        message: "Could not fetch products!",
        data: error,
      });
    }
}


export const ProductControllers = {
  createProduct,
  getAllProducts,
  getAProduct
};
