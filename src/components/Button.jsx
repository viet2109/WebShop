import React from 'react'

function Button({ children, className, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 border-2 bg-black text-white rounded flex justify-center items-center hover:bg-white hover:text-black transition duration-300 border-black ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button