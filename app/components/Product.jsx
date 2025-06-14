"use client";
import React from "react";
import Link from "next/link";

const Product = ({ items }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <div
              key={product._id}
              className="col-lg-4 col-md-6 my-3 text-center d-flex justify-content-center align-items-center"
            >
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <Link href="/">
                  <div className="d-flex justify-content-center align-items-center p-4">
                    <img
                      src={product.imgsrc}
                      alt="img"
                      className="card-img-top"
                      style={{
                        width: "200px",
                        borderRadius: "12px",
                        border: "1px solid yellow",
                      }}
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-2">₹ {product.price}</button>
                  <button className="btn btn-warning mx-2">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
