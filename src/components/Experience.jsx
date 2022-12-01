import React from 'react'
import img from '../assets/images/JBL_TUNE220TWS_Lifestyle_black.png'
function Experience({ item }) {
    return (
        <div className={`md:flex md:flex-wrap md:gap-2 py-4  justify-center ${item.id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            <img src={item.img} alt="" className='w-full md:flex-1 lg:w-1/2' />
            <p className='md:flex-1 py-8 text-lg'>{item.title}</p>
        </div>
    )
}

export default Experience