import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  AiFillStar,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillCheckCircle
} from "react-icons/ai";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useState } from "react";
import className from "classnames/bind";
import styles from "./DetailPage.module.css";
import Button from "../components/Button";
import Product from "../components/Product";
import { productStore } from "../ProductStore";
import { useRef } from "react";
import SweetAleart from "../components/SweetAleart";

const cx = className.bind(styles);

function DetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  let comment = JSON.parse(localStorage.getItem(`product${state.id}`)) ?? [];
  let purchaseList = JSON.parse(localStorage.getItem(`purchaseList`)) ?? [];
  const [render, setRender] = useState(false);

  const successRef = useRef()
  const failedRef = useRef()
  const loginRef = useRef()

  let indents = [];

  const handleClickProducts = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };

  for (let i = 0; i < state.rate; i++) {
    indents.push(
      <AiFillStar key={i} className="mx-2 text-yellow-400"></AiFillStar>
    );
  }
  const [amount, setAmout] = useState(1);
  const handleIncrease = () => {
    setAmout(amount + 1);
  };

  const handleDecrease = () => {
    amount <= 1 ? setAmout(1) : setAmout(amount - 1);
  };
  const showSweetAlert = (alertRef) => {
    alertRef.current.classList.add("success")
    setTimeout(() => {
      alertRef.current.classList.remove("success")
    }, 2000)
  }
  const handleBuyProduct = () => {
    if (!localStorage.getItem("currentUser")) {
      showSweetAlert(loginRef)
      return
    }
    const bill = {
      id: state.id,
      img: state.img,
      brand: state.brand,
      price: state.discount || state.price,
      amount: amount,
      total: amount * state.discount || state.price
    }
    const had = JSON.parse(localStorage.getItem("purchaseList") || []).some(e => e.id === bill.id)
    if (had) showSweetAlert(failedRef)
    else {
      localStorage.setItem("purchaseList", JSON.stringify([...JSON.parse(localStorage.getItem("purchaseList")) || [], bill]))
      showSweetAlert(successRef)
    }
  }
  return (
    <div className="p-4">
      <div className="relative">
        <div className="absolute flex items-center">
          <Link to="/" className="font-semibold">
            Home&ensp;
          </Link>
          <MdOutlineDoubleArrow />
          &ensp;
          {state.id}
        </div>
        <img src={state.img} alt="" className="w-60 mx-auto" />
        <div className="flex w-full justify-around py-4">
          <div className="w-20 h-20 border"></div>
          <div className="w-20 h-20 border"></div>
          <div className="w-20 h-20 border"></div>
        </div>
        <p className="font-bold text-3xl py-4">{state.id}</p>
        <p className="py-2">
          <span className="mr-2 text-lg text-gray-500 font-semibold">
            Brand:
          </span>
          {state.brand}
        </p>
        <p className="flex items-center ">
          <span>Rated:</span>
          {indents}
        </p>
        <p>{state.desc}</p>
        <p className="py-2 flex items-center text-red-500 text-xl font-bold">
          <BsCurrencyDollar />
          {state.discount}{" "}
        </p>
        <div className="flex items-center text-3xl py-4">
          <AiFillMinusCircle onClick={handleDecrease} />
          <span className="mx-4">{amount}</span>
          <AiFillPlusCircle onClick={handleIncrease} />
        </div>
        <Button onClick={handleBuyProduct}>Thêm vào giỏ hàng</Button>
        <p className="mt-10 text-center text-xl font-bold">Các sản phẩm khác</p>
        <div className="grid grid-cols-1 mt-4 gap-8 md:grid-cols-2 mb-4 lg:grid-cols-3">
          {productStore.map((e) => (
            <Product key={e.id} item={e} onClick={() => setAmout(1)} />
          ))}
        </div>

        <div className="w-full  flex justify-center mt-16 mb-20">
          <button
            className="bg-black rounded-lg overflow-hidden text-white hover:bg-orange-600 transition-all duration-300 ease-in-out font-semibold pt-4 pb-4 pl-8 pr-8"
            onClick={handleClickProducts}
          >
            View all
          </button>
        </div>

        {/* Comment */}

        <div className={cx("comment-wrapper")}>
          <h2 className={cx("title")}>Review</h2>
          <div className={cx("push-comment-wrapper")}>
            <div className={cx("push-content")}>
              <img
                src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                className={cx("user-avatar")}
                alt=""
              ></img>
              <input
                type={"text"}
                placeholder="Bạn nghĩ gì về sản phẩm này ?"
                className={cx("input")}
                onInput={(e) => {
                  const push = document.querySelector(`.${cx("push")}`);
                  if (e.target.value.trim()) {
                    push.classList.add(`${cx("active")}`);
                  } else {
                    push.classList.remove(`${cx("active")}`);
                  }
                }}
                onFocus={(e) => {
                  const pushWrap = document.querySelector(
                    `.${cx("push-content-btn")}`
                  );
                  pushWrap.style.display = "flex";
                }}
              />
            </div>
            <div className={cx("push-content-btn")}>
              <button
                className={cx("cancel")}
                onClick={(e) => {
                  const inputField = document.querySelector(`.${cx("input")}`);
                  const pushWrap = document.querySelector(
                    `.${cx("push-content-btn")}`
                  );
                  const push = document.querySelector(`.${cx("push")}`);
                  push.classList.remove(`${cx("active")}`);
                  inputField.value = "";
                  pushWrap.style.display = "none";
                }}
              >
                Hủy
              </button>
              <button
                className={cx("push")}
                onClick={(e) => {
                  const inputField = document.querySelector(`.${cx("input")}`);
                  const pushWrap = document.querySelector(
                    `.${cx("push-content-btn")}`
                  );
                  if (inputField.value.trim()) {
                    setRender((prev) => !prev);
                    comment = [inputField.value, ...comment];
                    localStorage.setItem(
                      `product${state.id}`,
                      JSON.stringify(comment)
                    );
                    inputField.value = "";
                    pushWrap.style.display = "none";
                  }
                }}
              >
                Bình luận
              </button>
            </div>
          </div>
          <div className={cx("comment-content-wrapper")}>
            {comment.map((c, index) => (
              <div className={cx("comment-content")} key={index}>
                <img
                  src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                  className={cx("user-avatar")}
                  alt=""
                ></img>
                <p className={cx("content")}>
                  <span>{c}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* aler buy succes */}
      <SweetAleart title="Đã thêm vào giỏ hàng" ref={successRef} />
      <SweetAleart title="Sản phẩm đã được thêm vào trước đó" ref={failedRef} success={false} />
      <SweetAleart title="Vui lòng đăng nhập" ref={loginRef} success={false} />
    </div>
  );
}

export default DetailPage;
