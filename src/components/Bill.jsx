import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import SweetAleart from './SweetAleart'

function Bill({ item, onClick, isLike }) {
    const sweetRef = useRef()
    const navigate = useNavigate()
    const handleRemove = () => {
        const newArr = JSON.parse(localStorage.getItem("likedList") || []).filter(value => value.id !== item.id)
        localStorage.setItem("likedList", JSON.stringify(newArr))
        sweetRef.current.classList.add("success")
        setTimeout(() => {
            sweetRef.current.classList.remove("success")
            window.location.reload()
        }, 2000)
    }
    const handleBuyNow = () => {
        localStorage.setItem("purchaseList", JSON.stringify([...JSON.parse(localStorage.getItem("purchaseList")) || [], item]))
        navigate('/purchase')
        const newArr = JSON.parse(localStorage.getItem("likedList") || []).filter(value => value.id !== item.id)
        localStorage.setItem("likedList", JSON.stringify(newArr))

    }
    return (
        <div className="p-4 flex  justify-start">
            <img src={item.img} alt="" className='w-32 h-32 border ' />
            <div className="flex-1  ml-4">
                <p>{item.id}</p>
                <p className='text-gray-400 py-2'>Phân loại hàng: <span>{item.brand}</span></p>
                <div className='flex items-center justify-between'>
                    <p>
                        <span className=' text-red-500 font-semibold'>{item.price} </span>
                        <span>x<span>{item.amount}</span></span>
                    </p>
                    <p>
                        <span>Thành tiền: </span>
                        <span className='text-red-500 font-semibold'>{item.total}</span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">

                    {isLike && <span><Button className="bg-red-500 text-black" onClick={handleRemove}>Xóa</Button></span>}
                    <span>
                        {isLike ? <Button className="" onClick={handleBuyNow}>Mua Ngay</Button> :
                            <Button className="" onClick={onClick}>Thanh toán</Button>}
                    </span>
                </div>
            </div>
            <SweetAleart title="Đã xóa thành công" ref={sweetRef} />
        </div>
    )
}

export default Bill