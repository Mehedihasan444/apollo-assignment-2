import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

//
// const getAllProducts = async () => {
//   const result = await Product.find();
//   return result;
// };
//
const getAProduct = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};
//
const updateAProduct = async (productId: string, updateData: any) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    { $set: updateData },
    { new: true }
  );
  return result;
};
// 
const deleteAProduct = async (productId: string) =>{

    const result = await Product.findByIdAndDelete(productId);
    return result;
}
// 
const searchProducts = async (searchTerm: string)=>{
    const regex = new RegExp(searchTerm, 'i'); 
    const products = await Product.find({
        $or: [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { tags: { $regex: regex } }
        ]
    });
    return products;
}


// ----------------------==============--------------------------
export const ProductServices = {
  createProduct,
//   getAllProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
  searchProducts
};
