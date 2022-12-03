import React from "react";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Slide from "../components/Slide";

import { useEffect } from "react";

import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../assets/images/index";
import Product from "../components/Product";

import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  const slides = [
    {
      img: images.slide1,
      id: "JBL E55BT KEY RED",
      name: "Next-gen design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda rem accusantium? Modi, deserunt soluta aliquam voluptatem laboriosam voluptatum minus temporibus quibusdam ullam itaque reprehenderit aperiam autem asperiores blanditiis maxime.",
      brand: "JBL",
      price: 350,
      discount: 200,
      rated: 5,
    },
    {
      img: images.slide2,
      id: "JBL E55BT KEY BLACK",
      name: "Next-gen design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda rem accusantium? Modi, deserunt soluta aliquam voluptatem laboriosam voluptatum minus temporibus quibusdam ullam itaque reprehenderit aperiam autem asperiores blanditiis maxime.",
      brand: "JBL",
      price: 400,
      discount: 300,
      rated: 4,
    },
    {
      img: images.slide3,
      id: "HEADPHONES APPLE BEATS",
      name: "Next-gen design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda rem accusantium? Modi, deserunt soluta aliquam voluptatem laboriosam voluptatum minus temporibus quibusdam ullam itaque reprehenderit aperiam autem asperiores blanditiis maxime.",
      brand: "APPLE",
      price: 400,
      discount: 300,
      rated: 5,
    },
  ];
  const banners = [
    {
      id: "JBL Horizon",
      title: "Headphone & Earbuds",
      img: images.banner1,
    },
    {
      id: "JBL E55BT KEY RED",
      title: "JBL Quantum Series",
      img: images.banner2,
    },
    {
      id: "JBL Tune 220TWS",
      title: "True Wireless Earbuds",
      img: images.banner3,
    },
  ];
  const products = [
    {
      id: "JBL Quantum 400",
      img: images.product1,
      hover: images.product1Hover,
      color: "Black",
      brand: "JBL",
      price: 300,
      rate: 5,
      discount: 200,
    },
    {
      id: "JBL E55BT KEY BLACK",
      img: images.product2,
      hover: images.product2Hover,
      color: "Black",
      brand: "JBL",

      price: 400,
      rate: 4,
      discount: 300,
    },
    {
      id: "JBL JR 310BT",
      img: images.product3,
      hover: images.product3Hover,
      color: "Blue",
      brand: "JBL",

      price: 1400,
      rate: 3,
      discount: 1000,
    },
    {
      id: "Samsung E55BT KEY RED",
      img: images.product4,
      hover: images.product4Hover,
      color: "red",
      brand: "Samsung",

      price: 3050,
      rate: 2,
      discount: 2000,
    },
    {
      id: "Sony Horizon",
      img: images.product5,
      hover: images.product5Hover,
      color: "green",
      brand: "Sony",
      price: 650,
      rate: 5,
      discount: 600,
    },
    {
      id: "Logitech Tune 220TWS",
      img: images.product6,
      hover: images.product6Hover,
      color: "pink",
      brand: "Logitech",
      price: 800,
      rate: 5,
      discount: 650,
    },
    {
      id: "Beat UA Project Rock",
      img: images.product7,
      hover: images.product7Hover,
      color: "green",
      brand: "Beat",

      price: 1000,
      rate: 5,
      discount: 500,
    },
    {
      id: "Beat Endurance SPRINT",
      img: images.product8,
      hover: images.product8Hover,
      color: "red",
      brand: "Beat",

      price: 4000,
      rate: 3,
      discount: 3000,
    },
  ];
  const experiences = [
    {
      img: images.experience1,
      id: 1,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci incidunt inventore accusamus nulla veritatis atque quaerat, odit, enim quo soluta voluptatem, sint molestiae libero sapiente recusandae necessitatibus aspernatur. Corrupti?",
    },
    {
      img: images.experience2,
      id: 2,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci incidunt inventore accusamus nulla veritatis atque quaerat, odit, enim quo soluta voluptatem, sint molestiae libero sapiente recusandae necessitatibus aspernatur. Corrupti?",
    },
    {
      img: images.experience3,
      id: 3,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci incidunt inventore accusamus nulla veritatis atque quaerat, odit, enim quo soluta voluptatem, sint molestiae libero sapiente recusandae necessitatibus aspernatur. Corrupti?",
    },
  ];
  const handleClickProducts = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, []);
  return (
    <div className="px-4">
      <div className="relative w-full flex overflow-hidden lg:px-10">
        <Swiper
          className=""
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => swiper.$el[0].classList.add("show")}
          // onSwiper={}
          navigation={true}
          modules={[Navigation]}
        >
          {slides.map((e) => (
            <SwiperSlide key={e.id}>
              <Slide item={e} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center absolute bottom-0 right-1/3 z-[9999]" onClick={handleNextSlide}><MdOutlineNavigateNext size={24} /></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center absolute bottom-0 right-1/2"><GrFormPrevious size={24} /></div> */}
      </div>
      <div className="grid grid-cols-1 gap-8 my-4 md:grid-cols-2 lg:grid-cols-3">
        {banners.map((e) => (
          <Banner key={e.id} item={e} />
        ))}
      </div>
      <p className="text-center">List product</p>
      <div className="grid grid-cols-1 mt-4 gap-8 md:grid-cols-2 mb-4 lg:grid-cols-3">
        {products.map((e) => (
          <Product key={e.id} item={e} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-16 mb-20">
        <button
          className="bg-black text-white rounded-lg overflow-hidden hover:bg-orange-600 transition-all duration-300 ease-in-out font-semibold pt-4 pb-4 pl-8 pr-8"
          onClick={handleClickProducts}
        >
          View all
        </button>
      </div>
      {experiences.map((e) => (
        <Experience key={e.id} item={e} />
      ))}
    </div>
  );
}

export default HomePage;
