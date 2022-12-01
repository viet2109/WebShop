import React from 'react'
import img from "../assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp"
import Button from './Button'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Product({ item }) {
    const navigate = useNavigate()
    const handleClick = () => {
        window.scrollTo(0, 0)
        navigate(`/${item.id}`, { state: { ...item } })
    }
    return (
        <div className='flex flex-col items-center hover:bg-gray-300 transition duration-500 group relative'>
            <img src={item.img} alt="" className='h-80 group-hover:hidden' />
            <img src={item.hover} alt="" className='h-80 hidden group-hover:block' />
            <div className="md:p-5 relative w-full">
                <div className="w-full flex items-center justify-center mb-2 text-xs md:absolute md:bottom-0 md:mb-0  transition duration-300  md:group-hover:-translate-y-[80px]
                md:group-hover:opacity-100 md:group-hover:flex md:left-0  md:opacity-0">
                    <Button className="ml-2 p-0" onClick={handleClick}>Mua ngay</Button>
                    <Button className="ml-2 text-sm "><HiOutlineShoppingCart /></Button>
                    <Button className="ml-2 text-sm "><AiFillHeart /></Button>
                </div>
                <p className=' text-center font-semibold text-lg'>{item.id}</p>
                <div className="flex justify-center">
                    <del className='mr-2 text-sm pt-2 '>{item.price}</del>
                    <p className='text-red-500 text-xl font-semibold '>{item.discount}</p>
                </div>
            </div>
        </div>
    )
}

export default Product