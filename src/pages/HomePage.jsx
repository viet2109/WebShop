import React from 'react'
import Banner from '../components/Banner'
import Experience from '../components/Experience'
import Slide from '../components/Slide'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import images from '../assets/images/index'
import Product from '../components/Product'
import { useEffect } from 'react'
function HomePage() {
    const slides = [
        {
            img: images.slide1,
            id: "JBL E55BT KEY RED",
            name: "Next-gen design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda rem accusantium? Modi, deserunt soluta aliquam voluptatem laboriosam voluptatum minus temporibus quibusdam ullam itaque reprehenderit aperiam autem asperiores blanditiis maxime.",
            brand: "JBL",
            price: 350,
            discount: 200,
            rated: 5
        },
        {
            img: images.slide2,
            id: "JBL E55BT KEY BLACK",
            name: "Next-gen design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda rem accusantium? Modi, deserunt soluta aliquam voluptatem laboriosam voluptatum minus temporibus quibusdam ullam itaque reprehenderit aperiam autem asperiores blanditiis maxime.",
            brand: "JBL",
            price: 400,
            discount: 300,
            rated: 4

        },
        {
            img: images.slide3,
            id: "HEADPHONES APPLE BEATS",
            name: "Next-gen design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat assumenda rem accusantium? Modi, deserunt soluta aliquam voluptatem laboriosam voluptatum minus temporibus quibusdam ullam itaque reprehenderit aperiam autem asperiores blanditiis maxime.",
            brand: "APPLE",
            price: 400,
            discount: 300,
            rated: 5
        },
    ]
    const banners = [
        {
            id: "JBL Horizon",
            title: 'Headphone & Earbuds',
            img: images.banner1
        },
        {
            id: "JBL E55BT KEY RED",
            title: 'JBL Quantum Series',
            img: images.banner2
        },
        {
            id: "JBL Tune 220TWS",
            title: 'True Wireless Earbuds',
            img: images.banner3
        },

    ]
    const products = [
        {
            id: "JBL Quantum 400",
            img: images.product1,
            hover: images.product1Hover,
            price: 300,
            discount: 200
        },
        {
            id: "JBL E55BT KEY BLACK",
            img: images.product2,
            hover: images.product2Hover,
            price: 400,
            discount: 300
        },
        {
            id: "JBL JR 310BT",
            img: images.product3,
            hover: images.product3Hover,
            price: 400,
            discount: 300
        },
        {
            id: "JBL E55BT KEY RED",
            img: images.product4,
            hover: images.product4Hover,
            price: 350,
            discount: 200
        },
        {
            id: "JBL Horizon",
            img: images.product5,
            hover: images.product5Hover,
            price: 450,
            discount: 400
        },
        {
            id: "JBL Tune 220TWS",
            img: images.product6,
            hover: images.product6Hover,
            price: 400,
            discount: 300
        },
        {
            id: "UA Project Rock",
            img: images.product7,
            hover: images.product7Hover,
            price: 100,
            discount: 50
        },
        {
            id: "JBL Endurance SPRINT",
            img: images.product8,
            hover: images.product8Hover,
            price: 400,
            discount: 300
        },
    ]
    const experiences = [
        {
            img: images.experience1,
            id: 1,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci incidunt inventore accusamus nulla veritatis atque quaerat, odit, enim quo soluta voluptatem, sint molestiae libero sapiente recusandae necessitatibus aspernatur. Corrupti?"
        },
        {
            img: images.experience2,
            id: 2,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci incidunt inventore accusamus nulla veritatis atque quaerat, odit, enim quo soluta voluptatem, sint molestiae libero sapiente recusandae necessitatibus aspernatur. Corrupti?"
        },
        {
            img: images.experience3,
            id: 3,
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci incidunt inventore accusamus nulla veritatis atque quaerat, odit, enim quo soluta voluptatem, sint molestiae libero sapiente recusandae necessitatibus aspernatur. Corrupti?"
        },
    ]
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    }, [])
    return (
        <div className='px-4'>
            <div className="relative w-full flex overflow-hidden lg:px-10">
                <Swiper className="" spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={(swiper) => swiper.$el[0].classList.add("show")}
                    // onSwiper={}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {
                        slides.map(e => (
                            <SwiperSlide key={e.id}><Slide item={e} /></SwiperSlide>
                        ))
                    }
                </Swiper>
                {/* <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center absolute bottom-0 right-1/3 z-[9999]" onClick={handleNextSlide}><MdOutlineNavigateNext size={24} /></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center absolute bottom-0 right-1/2"><GrFormPrevious size={24} /></div> */}
            </div>
            <div className='grid grid-cols-1 gap-8 my-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    banners.map(e => (
                        <Banner key={e.id} item={e} />
                    ))
                }

            </div>
            <p className='text-center'>List product</p>
            <div className="grid grid-cols-1 mt-4 gap-8 md:grid-cols-2 mb-4 lg:grid-cols-3">
                {
                    products.map(e => (
                        <Product key={e.id} item={e} />
                    ))
                }
            </div>
            {
                experiences.map(e => (
                    <Experience key={e.id} item={e} />
                ))
            }
        </div>
    )
}

export default HomePage