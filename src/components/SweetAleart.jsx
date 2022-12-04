import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

function SweetAleart({ ref }) {
    //   successRef.current.classList.add("success")
    //   setTimeout(() => {
    //     successRef.current.classList.remove("success")

    //   }, 2000)
    return (
        <div className="fixed top-[70px] right-[-300px] w-72 rounded shadow-xl border-green-600 border-2 bg-white p-4 transition duration-500 flex items-center " ref={ref}>
            <AiFillCheckCircle size={24} className='mr-4 text-green-400' />
            Mua hàng thành công
        </div>
    )
}

export default SweetAleart