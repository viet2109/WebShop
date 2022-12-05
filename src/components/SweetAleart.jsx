import React, { forwardRef } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const SweetAleart = forwardRef(({ title, className, success = true }, ref) => {
    return (
        <div className={`fixed top-[70px] right-[-500px] rounded shadow-xl ${success ? " border-green-600" : "border-red-600"} border-2 bg-white p-4 transition duration-500 flex items-center z-[9999999999] ${className}`} ref={ref}>
            <AiFillCheckCircle size={24} className={`mr-4 ${success ? " text-green-600" : "text-red-600"}`} />
            {title}
        </div>
    )
})

export default SweetAleart