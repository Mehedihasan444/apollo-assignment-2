import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// 
const createProduct =async (payload: TProduct) =>{
    const result= await Product.create(payload)
    return result;
}

// 
const getAllProducts =async () =>{
    const result= await Product.find()
    return result;
}
// 
const getAProduct =async (productId: string) =>{
    const result= await Product.findById(productId)
    return result;
}


export const ProductServices={
    createProduct,
    getAllProducts,
    getAProduct
} ;