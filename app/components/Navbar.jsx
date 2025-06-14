import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg sticky-top p-4 bg-primary"
        style={{ height: "80px" }}
      >
        <div className="container d-flex gap-4">
          <Link href={"/"} className="navbar-brand fw-bolder text-light">
            Shopping Cart
          </Link>

          {/* Search Bar */}
          <form className="d-flex flex-grow-1 mx-2">
            <input
              type="text"
              className="form-control border-secondary"
              placeholder="Search Product..."
            />
            <button className="btn btn-danger" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Cart Button */}
          <Link href={"/"} className="ms-2">
            <button className="btn btn-light position-relative">
              <FaShoppingCart className="text-primary fs-4" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
