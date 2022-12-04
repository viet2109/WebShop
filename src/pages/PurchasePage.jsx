import React from 'react'
import { useRef } from 'react';
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import images from '../assets/images';
import Button from '../components/Button'

function PurchasePage() {
    const billRef = useRef()
    const handleShowBill = () => {
        billRef.current.classList.toggle("scale-0")
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md:mt-4 relative'>
            <div className="p-4 bg-gradient-to-b from-[#304352] to-[#d7d2cc] md:bg-none">
                <div className="flex  text-lg pt-10 md:flex-col">
                    <div className="md:w-full md:border-b pb-4 ">
                        <span className='w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center text-white mr-4'>
                            <AiOutlineUser size={36} />
                        </span>
                    </div>
                    <div className="">
                        <p className='font-semibold md:py-2'>Duyvu</p>
                        <p className='md:py-2'>akjdsh</p>
                        <div className='flex items-center md:py-2'>
                            <AiOutlineHeart size={20} className='mr-2' />
                            Yêu thích
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:col-span-2 gap-4">
                <div className="p-4 flex  justify-start">
                    <img src={images.product1} alt="" className='w-32 h-32 border ' />
                    <div className="flex-1  ml-4">
                        <p>CHuotlskfjlksajflkjsa;dlkfjs</p>
                        <p className='text-gray-400 py-2'>Phân loại hàng: </p>
                        <div className='flex items-center justify-between'>
                            <p>
                                <span className=' text-red-500 font-semibold'>300 </span>
                                <span>x1</span>
                            </p>
                            <p>
                                <span>Thành tiền: </span>
                                <span className='text-red-500 font-semibold'>6000</span>
                            </p>
                        </div>

                        <Button className="mt-2" onClick={handleShowBill}>Thanh Toán</Button>
                    </div>
                </div>
                <div className="p-4 flex  justify-start">
                    <img src={images.product1} alt="" className='w-32 h-32 border ' />
                    <div className="flex-1  ml-4">
                        <p>CHuotlskfjlksajflkjsa;dlkfjs</p>
                        <p className='text-gray-400 py-2'>Phân loại hàng: </p>
                        <div className='flex items-center justify-between'>
                            <p>
                                <span className=' text-red-500 font-semibold'>300 </span>
                                <span>x1</span>
                            </p>
                            <p>
                                <span>Thành tiền: </span>
                                <span className='text-red-500 font-semibold'>6000</span>
                            </p>
                        </div>

                        <Button className="mt-2" onClick={handleShowBill}>Thanh Toán</Button>
                    </div>
                </div>
                <div className="p-4 flex justify-start">
                    <img src={images.product1} alt="" className='w-32 h-32 border ' />
                    <div className="flex-1  ml-4">
                        <p>CHuotlskfjlksajflkjsa;dlkfjs</p>
                        <p className='text-gray-400 py-2'>Phân loại hàng: </p>
                        <div className='flex items-center justify-between'>
                            <p>
                                <span className=' text-red-500 font-semibold'>300 </span>
                                <span>x1</span>
                            </p>
                            <p>
                                <span>Thành tiền: </span>
                                <span className='text-red-500 font-semibold'>6000</span>
                            </p>
                        </div>

                        <Button className="mt-2" onClick={handleShowBill}>Thanh Toán</Button>
                    </div>
                </div>
                <div className="">
                    <Button className='mx-auto my-10' onClick={handleShowBill}>Thanh toán tất cả</Button>
                </div>
            </div>
            <div className="fixed h-full w-full bg-gray-400 bg-opacity-80 shadow-xl -mt-4 transition duration-500 scale-0 " ref={billRef}>
                <div className=" w-[260px] md:w-[400px] lg:w-[600px] rounded bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className='border-b  font-bold text-xl w-full text-center p-4'>Hóa đơn thanh toán</div>
                    <div className="p-4  flex flex-col items-center">
                        <p>Trạng thái: <span className='text-green-400 text-lg font-lg'>Thành công</span></p>
                        <p className='py-2'>Tổng số tiền của bạn là: <span className='text-red-400 text-lg font-lg'>300</span></p>
                        <Button className='my-4' onClick={handleShowBill}>Thoát!</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchasePage