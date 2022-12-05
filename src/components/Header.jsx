import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaBars, FaClosedCaptioning } from "react-icons/fa";
import { BiSearchAlt, BiUserCircle, BiXCircle } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { productStore } from "../ProductStore";
import { useRef } from "react";
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import Tippy2 from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Form from "./Form";
const cx = classNames.bind(styles);

function Header() {

  const [products, setProducts] = useState(productStore);
  const [suggestProduct, setSuggestProduct] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const handleClikProduct = (sp) => {
    navigate(`/${sp.id}`, { state: { ...sp } })
  }
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("currentUser")))
  // const handleShowNav = () => {
  //   console.log(navbarRef.current.style);
  //   navbarRef.current.style.top = navbarRef.current.style.top === "60px" ? "-200px" : "60px"
  //   console.log(navbarRef.current.style.top === "");

  // }
  const modalRef = useRef()
  const handleCloseModal = () => {
    modalRef.current.classList.toggle("scale-0")
    document.body.classList.toggle("overflow-hidden")
  }
  return (
    <>
      <div className="h-header-h fixed top-0 w-screen border-b px-4 bg-white z-[999] md:px-8">
        <div className="h-full mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl md:text-2xl">
            Vshop
          </Link>
          <div>
            <Tippy
              interactive={true}
              onClickOutside={() => {
                setShowMenu(false)
              }}
              visible={showMenu && suggestProduct.length > 0}

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
                      <div className="flex-1 h-full flex items-center " onClick={() => handleClikProduct(sp)}>
                        <p className="whitespace-nowrap text-ellipsis overflow-hidden">
                          {sp.id}
                        </p>

                      </div>
                    </li>
                  ))}

                </ul>
              )}
            >
              <div className="bg-gray-200 px-4 py-2 rounded relative md:w-[400px] lg:w-[600px] w-full">
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
            {/* <FaBars className="md:hidden " size={20} onClick={handleShowNav} /> */}
            <Tippy2 content="Sản phẩm">
              <span className="hidden md:block ">
                <BsShop className="cursor-pointer" size={20} onClick={() => navigate('/products')} />
              </span>
            </Tippy2>
            <Tippy2 content="Giỏ hàng">
              <span className="hidden md:block " onClick={() => navigate('/purchase')}>
                <AiOutlineShoppingCart className="cursor-pointer" size={24} />
              </span>
            </Tippy2>


            <Tippy
              interactive={true}
              placement="bottom-start"
              visible={showMenuMobile}
              render={() => (
                <ul className="w-40 bg-white shadow-xl rounded-lg border mt-3 py-4">
                  <li className="flex items-center cursor-pointer hover:bg-gray-300 transition duration-300 py-2 px-4" onClick={() => {
                    navigate("/liked")
                    setShowMenuMobile(false)
                  }}>
                    <AiOutlineHeart />
                    <span className="ml-2">Đã thích</span>
                  </li>
                  <li className="flex items-center cursor-pointer hover:bg-gray-300 transition duration-300 py-2 px-4 lg:hidden" onClick={() => {
                    setShowMenuMobile(false)
                    navigate('/products')
                  }}>
                    <BsShop className="" />
                    <span className="ml-2">Sản phẩm</span>
                  </li>
                  <li className="flex items-center cursor-pointer hover:bg-gray-300 transition duration-300 py-2 px-4 lg:hidden" onClick={() => {
                    setShowMenuMobile(false)
                    navigate('/purchase')
                  }}>
                    <AiOutlineShoppingCart className="" />
                    <span className="ml-2">Giỏ hàng</span>
                  </li>
                  {
                    JSON.parse(localStorage.getItem("currentUser")) ?
                      <li className="flex items-center cursor-pointer hover:bg-gray-300 transition duration-300 py-2 px-4 border-t" onClick={() => {
                        localStorage.removeItem("currentUser")
                        navigate("/")
                        setIsLogin(false)
                        setShowMenuMobile(false)
                        window.location.reload()
                      }}>
                        <FiLogOut />
                        <span className="ml-2">Đăng xuất</span>
                      </li>
                      :
                      <li className="flex items-center cursor-pointer hover:bg-gray-300 transition duration-300 py-2 px-4 border-t" onClick={() => {
                        handleCloseModal()
                        setShowMenuMobile(false)
                      }}>
                        <FiLogIn />
                        <span className="ml-2">Đăng Nhập</span>
                      </li>}

                </ul>
              )}
            >
              <span onClick={() => setShowMenuMobile(prev => !prev)}>
                <BiUserCircle className=" md:block cursor-pointer" size={24} />
              </span>
            </Tippy>
          </div>



        </div>

      </div>
      {/* navbar in mobile */}
      <Form ref={modalRef} />
    </>
  );
}

export default Header;
