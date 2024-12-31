import { Link } from "react-router";
import { HiBars3CenterLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const Navbar = () => {
  const currentUser = true;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // this is for dropdown menu on user icon
  console.log(isDropdownOpen);

  return (
    <header className="max-w-screen-exl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiBars3CenterLeft className="size-6" />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="What are you looking for"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            ></input>
          </div>
        </div>
        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    alt="user"
                    src={avatarImg}
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-blue-500 ring-2" : ""
                    }`}
                  ></img>
                </button>
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          {/* <button className="hidden md:block"> */}
          <button className="hidden">
            <HiOutlineUser className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
          <FaRegHeart />
        </div>
      </nav>
      This my Navbar
    </header>
  );
};
export default Navbar;
