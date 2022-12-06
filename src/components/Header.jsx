import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt, BiUserCircle } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles);

function Header() {
  
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products"));
  });
  const [suggestProduct, setSuggestProduct] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  window.onclick =(e) => {
    console.log(showMenu);
  }
  return (
    <div className="h-header-h fixed top-0 w-screen border-b px-4 bg-white z-[99999] md:px-8">
      <div className="h-full mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl md:text-2xl">
          Vshop
        </Link>
        <div>
          <Tippy
            interactive={true}
            onClickOutside={() => {
             
              setShowMenu(false)}}
            visible={showMenu && suggestProduct.length >0}
           
            placement="bottom-start"
            render={() => (
              <ul className="bg-gray-200  w-[140px] rounded-lg overflow-hidden md:w-[400px] lg:w-[800px]">
                {suggestProduct.map((sp, index) => (
                        <li
                          key={index}
                          className='w-full h-12 px-4  hover:bg-gray-400'
                          onClick={(e) => {
                            setSuggestProduct((prev) => []);
                            document.querySelector(
                              `.${cx("search-wrapper")} input`
                            ).value = "";
                          }}
                        >
                          <Link className="flex-1 h-full flex items-center " to={`/${sp.id}`} state={{ ...sp }}>
                            <p className="whitespace-nowrap text-ellipsis overflow-hidden">
                            {sp.id}
                            </p>
                            
                          </Link>
                        </li>
                      ))}
                
              </ul>
            )}
          >
            <div className="bg-gray-200 px-4 py-2 rounded relative md:w-[400px] lg:w-[800px] w-[60%]">
              <div className={cx("search-wrapper")}>
                <input
                  spellCheck={false}
                  placeholder="Search"
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent outline-none w-[90%] "
                  onChange={(e) => {
                    if (
                      !e.target.value.startsWith(" ") &&
                      e.target.value.trim().length > 0
                    ) {
                      let list = [];
                      for (const product of products) {
                        if (
                          product.id
                            .toUpperCase()
                            .includes(e.target.value.toUpperCase())
                        ) {
                          list = [...list, product];
                        }
                      }
                      
                      setSuggestProduct((prev) => list);
                    } else {
                      e.target.value = "";
                      setSuggestProduct((prev) => []);
                    }
                  }}
                  
                  onFocus={() => {
                    setShowMenu(true);
                  }}
                />
              </div>
          
              <BiSearchAlt
                className="absolute top-1/2 right-1 -translate-y-1/2"
                size={20}
              />
            </div>
          </Tippy>
        </div>

        <div className="flex gap-x-4 md:gap-x-6">
          <FaBars className="md:hidden" size={20} />
          <BsShop className="hidden md:block" size={20} />

          <AiOutlineShoppingCart className="hidden md:block" size={24} />
          <BiUserCircle className="hidden md:block" size={24} />
        </div>

        {/* <div className={cx("sub-menu")}>
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
        </div> */}
      </div>
    </div>
  );
}

export default Header;
