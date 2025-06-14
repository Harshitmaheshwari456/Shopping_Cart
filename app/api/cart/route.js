import connectDB from "../../utils/database";
import { addToCart, clearCart, getCartItems } from "../../controllers/cart";

// http://localhost:3000/api/cart
export async function POST(req){
    await connectDB();
    return await addToCart(req);
}

// http://localhost:3000/api/cart
export async function GET(req){
    await connectDB();
    return await getCartItems(req);
}

// http://localhost:3000/api/cart
export async function DELETE(req){
    await connectDB();
    return await clearCart(req);
}
