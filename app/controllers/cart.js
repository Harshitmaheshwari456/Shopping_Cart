import Cart from "../models/Cart";
import { NextResponse } from "next/server";

// add items to cart
export const addToCart = async (req) =>{
    const body = await req.json();

    const newCart = await Cart.create(body);

    return NextResponse.json({
        message: "Item Added to cart successfully...!",
        success: true,
        cartItem: newCart,
    });
};

// get cart items
export const getCartItems = async (req) => {
    const cartItems = await Cart.find();

    return NextResponse.json({
        message: "All items of cart fetched...!",
        success: true,
        cartItems,
    });
};

// clear all cart items
export const clearCart = async (req) => {
    await Cart.deleteMany({});

    return NextResponse.json({
        message: "Cart is cleared...!",
        success: true,
    });
};
