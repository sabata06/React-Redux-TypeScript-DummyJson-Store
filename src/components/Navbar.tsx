import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-12 text-white bg-gray-500 px-5 items-center">
      <h3 className="font-bold">Dummy Store</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};

export default Navbar;
