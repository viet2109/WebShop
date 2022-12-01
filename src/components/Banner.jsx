import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button'
function Banner({ item }) {
    const nav = useNavigate();
    const handleClick = () => {

        window.scrollTo(0,0);
        nav(`/${item.id}`,{state: {...item} })
    }
    return (
        <div className="bg-gray-300 flex items-center group">
            <div className="flex-1 pl-2">
                <p className='mb-4'>{item.title}</p>
                <Button className="w-40" onClick={handleClick}>Mua Ngay</Button>
            </div>
            <img src={item.img} alt={item.title} className='w-32 h-32 group-hover:scale-110 transition duration-500' />
        </div>
    )
}

export default Banner