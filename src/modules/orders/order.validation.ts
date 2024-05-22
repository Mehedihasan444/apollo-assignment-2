import { z } from "zod";

// Order Schema
const orderValidationSchema = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number().positive(),
    quantity: z.number().int().positive(),
  });

  export default orderValidationSchema