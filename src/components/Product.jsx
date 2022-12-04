import React from 'react'
import img from "../assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp"
import Button from './Button'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiFillCheckCircle, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'

function Product({ item, onClick = () => { } }) {
    const navigate = useNavigate()
    const [purchaseList, setPurchaseList] = useState(JSON.parse(localStorage.getItem(`purchaseList`)) || [])
    const handleClick = () => {
        navigate(`/${item.id}`, { state: { ...item } })
        window.scrollTo(0, 0)
        onClick()
    }
    const successRef = useRef()
    const handleAddBill = () => {
        const bill = {
            id: item.id,
            img: item.img,
            brand: item.brand,
            price: item.discount || item.price,
            amount: 1,
            total: item.discount || item.price
        }
        localStorage.setItem('purchaseList', JSON.stringify([...JSON.parse(localStorage.getItem(`purchaseList`)) || [], bill]))
        // Show alert buy success
        successRef.current.classList.add("success")
        setTimeout(() => {
            successRef.current.classList.remove("success")

        }, 2000)
    }
    return (
        <div className='flex flex-col items-center hover:bg-gray-300 transition duration-500 group relative'>
            <img src={item.img} alt="" className='h-72 group-hover:hidden ' loading='lazy' />
            <img src={item.hover} alt="" className='h-72 hidden group-hover:block' loading='lazy' />
            <div className="md:p-5 relative w-full">
                <div className="w-full flex items-center justify-center mb-2 text-xs md:absolute md:bottom-0 md:mb-0  transition duration-300  md:group-hover:-translate-y-[80px]
                md:group-hover:opacity-100 md:group-hover:flex md:left-0  md:opacity-0">
                    <Button className="ml-2 p-0" onClick={() => {
                        handleClick()
                    }}>Mua ngay</Button>
                    <Button className="ml-2 text-sm " onClick={handleAddBill}><HiOutlineShoppingCart /></Button>
                    <Button className="ml-2 text-sm "><AiFillHeart /></Button>
                </div>
                <p className=' text-center font-semibold text-lg'>{item.id}</p>
                <div className="flex justify-center">
                    <del className='mr-2 text-sm pt-2 '>{item.price}</del>
                    <p className='text-red-500 text-xl font-semibold '>{item.discount}</p>
                </div>
            </div>
            {/* aler buy succes */}
            <div className="fixed top-[70px] right-[-330px] w-72 rounded shadow-xl border-green-600 border-2 bg-white p-4 transition duration-500 flex items-center z-[999]" ref={successRef}>
                <AiFillCheckCircle size={24} className='mr-4 text-green-400' />
                Mua hàng thành công
            </div>
        </div>
    )
}

export default Product