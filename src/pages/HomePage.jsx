import React from "react";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Slide from "../components/Slide";

import { useEffect } from "react";

import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../components/Product";
import { productStore, banners, experiences, slides } from "../ProductStore";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const handleClickProducts = () => {
    window.scrollTo(0, 0);
    navigate("/products");
  };
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
        {productStore.map((e) => (
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
