import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt, BiUserCircle } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className="h-header-h fixed top-0 w-screen border-b px-4 bg-white z-[99999] md:px-8">
      <div className="h-full mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl md:text-2xl">
          Vshop
        </Link>
        <div className="bg-gray-200 px-4 py-2 rounded relative md:w-[400px] lg:w-[800px] w-[60%]">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent outline-none w-[90%] "
          />
          <BiSearchAlt
            className="absolute top-1/2 right-1 -translate-y-1/2"
            size={20}
          />
        </div>
        <div className="flex gap-x-4 md:gap-x-6">
          <FaBars className="md:hidden" size={20} />
          <BsShop className="hidden md:block" size={20} />

          <AiOutlineShoppingCart className="hidden md:block" size={24} />
          <BiUserCircle className="hidden md:block" size={24} />
        </div>
        <div className={cx("sub-menu")}>
          <ul className={cx("menu-list")}>
            <li className={cx("menu-item-header")}>Catagories</li>

            <li className={cx("menu-item")}>Wireless</li>
            <li className={cx("menu-item")}>Inear Headphone</li>
            <li className={cx("menu-item")}>Overear Headphone</li>
            <li className={cx("menu-item")}>Sport Headphone</li>
          </ul>
          <ul className={cx("menu-list")}>
            <li className={cx("menu-item-header")}>Catagories</li>

            <li className={cx("menu-item")}>Wireless</li>
            <li className={cx("menu-item")}>Inear Headphone</li>
            <li className={cx("menu-item")}>Overear Headphone</li>
            <li className={cx("menu-item")}>Sport Headphone</li>
          </ul>
          <ul className={cx("menu-list")}>
            <li className={cx("menu-item-header")}>Catagories</li>

            <li className={cx("menu-item")}>Wireless</li>
            <li className={cx("menu-item")}>Inear Headphone</li>
            <li className={cx("menu-item")}>Overear Headphone</li>
            <li className={cx("menu-item")}>Sport Headphone</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
