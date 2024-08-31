import React from "react";
// import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
const Header = () => {
  return (
    <header className="h-20 shadow-md my-8 ">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img className="h-fit w-44 my-auto " src={logo} alt="" />
        </div>
        <div className="hidden lg:flex md:flex relative shadow-md hover:shadow-[#837e7ee1] rounded-2xl">
          <input
            type="search"
            id="id"
            name="search"
            placeholder="Search"
            className="w-[300px] border-2 border-slate-600 rounded-2xl py-3 px-5 pl-10 outline-none bg-transparent bg-slate-100"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" />{" "}
          {/* Position the icon inside the input */}
        </div>
        <div className="flex items-center gap-7 ">
          <div className="text-3xl cursor-pointer">
            <FaUserCircle />
          </div>
          <div className="text-3xl cursor-pointer relative">
            <span className="">
              <FaLuggageCart />
            </span>
            <div className="bg-red-500 text-white rounded-full h-5 w-6 p-1 flex items-center justify-center absolute -top-2 -right-3 ">
              <p className="text-xs">0</p>
            </div>
          </div>
          <div className="mr-5">
            <Link
              to={"/login"}
              type="login"
              className="px-3 rounded-2xl bg-red-500 p-3 w-16 text-white font-semibold text-pretty hover:text-[#ffffff] hover:bg-[#fc6a6a]"
            >
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
