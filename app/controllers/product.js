import Products from "../models/products";
import { NextResponse } from "next/server";

//add product
export const createProduct = async (req) =>{
    const body = await req.json();

    const newProduct = await Products.create(body);

    return NextResponse.json({
        message: "Product Added Successfully...!",
        newProduct,
    });
};

// get all products
export const getProducts = async (req) => {
    const product = await Products.find();
    return NextResponse.json({
        message: "All Products Fetched Successfully...!",
        success: true,
        product,
    });
};