import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { GrYoutube } from 'react-icons/gr'
function Footer() {
    return (
        <div className='bg-gray-300 px-4 py-4'>
            <div className=" grid grid-cols-2">
                <ul >
                    <li className='font-bold text-xl'>Products</li>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Product Help</li>
                    <li>Warranty</li>
                    <li>Order Status</li>
                </ul>
                <ul >
                    <li className='font-bold text-xl'>Products</li>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Product Help</li>
                    <li>Warranty</li>
                    <li>Order Status</li>
                </ul>
            </div>
            <div className="my-8 pt-4 border-t border-black">
                <p className='font-bold text-xl pb-2 text-center'>Vshop</p>
                <div className="flex items-center justify-around">
                    <BsFacebook size={26} />
                    <AiFillInstagram size={26} />
                    <GrYoutube size={26} />
                    <BsTwitter size={26} />
                </div>
            </div>
        </div>
    )
}

export default Footer