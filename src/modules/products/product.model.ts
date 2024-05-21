import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";
const productSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String], // Array of strings
        required: true
    },
    variants: {
        type: [
            {
                type: {
                    type: String, // Type of the variant, e.g., "Color" or "Storage Capacity"
                    required: true
                },
                value: {
                    type: String, // Value of the variant, e.g., "Midnight Blue" or "256GB"
                    required: true
                }
            }
        ],
        required: true
    },
    inventory: {
        quantity: {
            type: Number,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true
        }
    }
});



export const Product = model<TProduct>("Product",productSchema)