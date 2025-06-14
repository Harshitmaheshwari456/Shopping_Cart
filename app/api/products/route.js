import connectDB from "../../utils/database";
import {createProduct, getProducts} from "../../controllers/product"


// http://localhost:3000/api/products
export async function POST(req){
    await connectDB();
    return await createProduct(req);
}

// http://localhost:3000/api/products
export async function GET(req){
    await connectDB();
    return await getProducts();
}
