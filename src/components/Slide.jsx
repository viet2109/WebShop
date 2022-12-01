import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
function Slide({ item }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`${item.id}`, { state: { ...item } })
    }
    return (
        <div className=' py-4 w-full md:flex md:flex-row-reverse md:items-center md:justify-center' >
            <img src={item.img} alt="" className=' w-[400px] md:w-1/2 mx-auto lg:w-[600px] -translate-y-1/2 opacity-0' />
            <div className="">
                <p className='font-bold  text-lg mb-2 md:text-3xl opacity-0 -translate-y-1/2 ' data-id='1'>{item.id}</p>
                <p className='font-bold text-2xl md:py-10 md:text-6xl opacity-0 -translate-y-1/2 ' data-id='2'>{item.name}</p>
                <p className='mb-4 opacity-0 -translate-y-1/2 ' data-id='3'>{item.desc}</p>
                <Button className="w-[40%] opacity-0 -translate-y-1/2 " data-id='4' onClick={handleClick}>Mua Ngay!</Button>
            </div>
        </div>
    )
}

export default Slide