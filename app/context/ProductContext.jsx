"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

// create product context
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    const api = await axios.get(`${API_BASE_URL}/products`);
    setData(api.data.product);
    setProducts(api.data.product);
    console.log("Fetched all products = ", products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log("Fetched all products = ", products);

  return (
    <ProductContext.Provider
      value={{
        products,
        data,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// custom hook for context
export const useProductContext = () => useContext(ProductContext);
export default ProductContext;
