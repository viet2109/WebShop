import React from 'react'
import { useNavigate } from 'react-router-dom'
import Bill from '../components/Bill'

function LikedPage() {
    const navigate = useNavigate()
    const list = JSON.parse(localStorage.getItem("likedList")) || []

    return (
        <div className='p-4 min-h-screen'>
            <p>Các sản phẩm đã thích</p>
            <div className="grid grid-cols-1 md:col-span-2 gap-4 ">
                {
                    list.map((e, i) => (
                        <Bill item={e} key={i} onClick={() => navigate("/purchase")} isLike />
                    ))
                }
            </div>
        </div>
    )
}

export default LikedPage