import React from "react";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";
import Product from "../components/Product";
import Select from "react-select";
import "./Products.css";
import { useState } from "react";
import { useRef } from "react";
import { productStore } from "../ProductStore";

function Products() {
  const productMain = useRef(productStore);
  const [products, setProducts] = useState(productStore);
  const priceFil = useRef([]);
  const brandFil = useRef([]);
  const colorFil = useRef([]);
  const rateFil = useRef([]);

  const handleFilter = () => {
    const res = [];
    for (const product of productMain.current) {
      if (
        ((product.discount >= priceFil.current[0] &&
          product.discount <= priceFil.current[1]) ||
          priceFil.current.length === 0) &&
        (brandFil.current.includes(product.brand.toLowerCase()) ||
          brandFil.current.length === 0) &&
        (colorFil.current.includes(product.color.toLowerCase()) ||
          colorFil.current.length === 0) &&
        (rateFil.current.includes(product.rate) || rateFil.current.length === 0)
      ) {
        res.push(product);
      }
    }

    setProducts((prev) => [...res]);
    window.scrollTo(0, 0);
  };
  const filterList = useRef()
  const handleShowFilter = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 1024) return
    if (filterList.current.style.width === '100%') {
      filterList.current.style.width = '0'
      filterList.current.style.padding = '0'
    } else {
      filterList.current.style.width = '100%'
      filterList.current.style.padding = '0 24px'
    }
  }
  return (
    <div className="flex max-w-7xl mx-auto mt-8 px-7">
      <div className="w-0 fixed top-header-h left-0 z-[999] bg-[#ccc]  max-h-full overflow-auto transition-all duration-500  lg:w-[200px] lg:relative lg:bg-white lg:mr-6" ref={filterList}>
        <AiFillCloseCircle className="text-5xl ml-auto mt-4 lg:hidden" onClick={handleShowFilter} />
        {/* Select input  (begin) */}

        <form action="" className="mb-16 form">
          <h2 className="mb-5">
            <strong>Prices</strong>
          </h2>

          <Select
            onChange={(option) => {
              priceFil.current = option.value;
              handleFilter();
              handleShowFilter();
            }}
            placeholder={"Select price"}
            options={[
              { value: [Number.MIN_VALUE, Number.MAX_VALUE], label: "Toàn bộ sản phẩm" },
              { value: [100, 500], label: "Dưới 500" },
              { value: [501, 1000], label: "Từ 500 - 1000" },
              { value: [1001, Number.MAX_VALUE], label: "Trên 1000" },
            ]}
          />
        </form>
        {/* Select input  (end) */}

        {/* Checkbox input (begin) */}
        {/* Brand */}
        <form action="" className="mb-16 form">
          <h2 className="mb-5">
            <strong>Brands</strong>
          </h2>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="jbl"
              id="brand1"
              onChange={(e) => {
                if (e.target.checked) {
                  brandFil.current.push(e.target.name.toLowerCase());
                } else {
                  brandFil.current.splice(
                    brandFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"brand1"}>
              JBL
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="beat"
              id="brand2"
              onChange={(e) => {
                if (e.target.checked) {
                  brandFil.current.push(e.target.name.toLowerCase());
                } else {
                  brandFil.current.splice(
                    brandFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"brand2"}>
              Beat
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="logitech"
              id="brand3"
              onChange={(e) => {
                if (e.target.checked) {
                  brandFil.current.push(e.target.name.toLowerCase());
                } else {
                  brandFil.current.splice(
                    brandFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"brand3"}>
              Logitech
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="samsung"
              id="brand4"
              onChange={(e) => {
                if (e.target.checked) {
                  brandFil.current.push(e.target.name.toLowerCase());
                } else {
                  brandFil.current.splice(
                    brandFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"brand4"}>
              Samsung
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="sony"
              id="brand5"
              onChange={(e) => {
                if (e.target.checked) {
                  brandFil.current.push(e.target.name.toLowerCase());
                } else {
                  brandFil.current.splice(
                    brandFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"brand5"}>
              Sony
            </label>
          </section>
        </form>

        {/* Color */}
        <form action="" className="mb-16 form">
          <h2 className="mb-5">
            <strong>Colors</strong>
          </h2>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="red"
              id="color1"
              onChange={(e) => {
                if (e.target.checked) {
                  colorFil.current.push(e.target.name.toLowerCase());
                } else {
                  colorFil.current.splice(
                    colorFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"color1"}>
              Red
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="black"
              id="color2"
              onChange={(e) => {
                if (e.target.checked) {
                  colorFil.current.push(e.target.name.toLowerCase());
                } else {
                  colorFil.current.splice(
                    colorFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"color2"}>
              Black
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="blue"
              id="color3"
              onChange={(e) => {
                if (e.target.checked) {
                  colorFil.current.push(e.target.name.toLowerCase());
                } else {
                  colorFil.current.splice(
                    colorFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"color3"}>
              Blue
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="pink"
              id="color4"
              onChange={(e) => {
                if (e.target.checked) {
                  colorFil.current.push(e.target.name.toLowerCase());
                } else {
                  colorFil.current.splice(
                    colorFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"color4"}>
              Pink
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name="green"
              id="color5"
              onChange={(e) => {
                if (e.target.checked) {
                  colorFil.current.push(e.target.name.toLowerCase());
                } else {
                  colorFil.current.splice(
                    colorFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="cursor-pointer" htmlFor={"color5"}>
              Green
            </label>
          </section>
        </form>

        {/* Rating */}
        <form action="" className="mb-16 pb-16 lg:pb-0 form">
          <h2 className="mb-5">
            <strong>Rating</strong>
          </h2>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name={5}
              id="rate5"
              onChange={(e) => {
                if (e.target.checked) {
                  rateFil.current.push(Number.parseInt(e.target.name));
                } else {
                  rateFil.current.splice(
                    rateFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="flex cursor-pointer" htmlFor={"rate5"}>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name={4}
              id="rate4"
              onChange={(e) => {
                if (e.target.checked) {
                  rateFil.current.push(Number.parseInt(e.target.name));
                } else {
                  rateFil.current.splice(
                    rateFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="flex cursor-pointer" htmlFor={"rate4"}>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name={3}
              id="rate3"
              onChange={(e) => {
                if (e.target.checked) {
                  rateFil.current.push(Number.parseInt(e.target.name));
                } else {
                  rateFil.current.splice(
                    rateFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="flex cursor-pointer" htmlFor={"rate3"}>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name={2}
              id="rate2"
              onChange={(e) => {
                if (e.target.checked) {
                  rateFil.current.push(Number.parseInt(e.target.name));
                } else {
                  rateFil.current.splice(
                    rateFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="flex cursor-pointer" htmlFor={"rate2"}>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
            </label>
          </section>
          <section className="flex items-center mb-4">
            <input
              className="w-5 h-5 mr-3"
              type="checkbox"
              name={1}
              id="rate1"
              onChange={(e) => {
                if (e.target.checked) {
                  rateFil.current.push(Number.parseInt(e.target.name));
                } else {
                  rateFil.current.splice(
                    rateFil.current.indexOf(e.target.name),
                    1
                  );
                }
                handleFilter();
                handleShowFilter();
              }}
            />
            <label className="flex cursor-pointer" htmlFor={"rate1"}>
              <AiFillStar className="mr-1 text-yellow-400"></AiFillStar>
            </label>
          </section>
        </form>

        {/* Checkbox input (end) */}
      </div>

      <div className="flex flex-col flex-1 relative">
        <label
          className="w-36 leading-10 py-1 cursor-pointer text-center text-white bg-black hover:text-black hover:bg-gray-300 lg:hidden font-semibold"
          htmlFor="check-mobile-menu"
          onClick={handleShowFilter}
        >
          Filter
        </label>
        <div className="grid  grid-cols-1 mt-4 gap-8 md:grid-cols-2 mb-4 lg:grid-cols-3">
          {products.map((e) => (
            <Product key={e.id} item={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
