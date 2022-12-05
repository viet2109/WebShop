import React, { forwardRef, useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Button from './Button'
import SweetAleart from './SweetAleart'

const Form = forwardRef(({ }, ref) => {

    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(true)

    const registerSuccessRef = useRef()
    const loginSuccessRef = useRef()
    const registerFaileRef = useRef()
    const loginFaileRef = useRef()
    const alertRef = useRef()

    const showSweetAlert = (alertRef) => {
        alertRef.current.classList.add("success")
        setTimeout(() => {
            alertRef.current.classList.remove("success")
        }, 2000)
    }
    const handleCloseModal = () => {
        ref.current.classList.toggle("scale-0")
        document.body.classList.toggle("overflow-hidden")
        setIsLogin(true)

    }
    const onLogin = () => {
        const user = {
            account,
            password
        }
        if (account === "" || password === "") {
            showSweetAlert(alertRef)
            return
        }
        const hasAccount = (JSON.parse(localStorage.getItem("listAccount")) || []).some((e) => e.account === user.account && e.password === user.password)
        if (hasAccount) {
            showSweetAlert(loginSuccessRef)
            localStorage.setItem("currentUser", JSON.stringify(user))
            setTimeout(() => {
                handleCloseModal()
            }, 2100)
        }
        else {
            showSweetAlert(loginFaileRef)
        }
    }
    const handleRegister = () => {
        if (account === "" || password === "") {
            showSweetAlert(alertRef)
            return
        }
        const user = {
            account,
            password
        }
        const hasAccount = (JSON.parse(localStorage.getItem("listAccount")) || []).some((e) => e.account === user.account)
        if (hasAccount) {
            showSweetAlert(registerFaileRef)
        }
        else {
            localStorage.setItem('listAccount', JSON.stringify([...JSON.parse(localStorage.getItem(`listAccount`)) || [], user]))
            showSweetAlert(registerSuccessRef)
            setIsLogin(true)
        }

    }
    return (

        <div className='fixed top-0 left-0 z-[9999999] w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50 transition duration-500 scale-0 overflow-hidden' ref={ref}>
            <div className=" bg-white shadow-2xl rounded relative" >
                {isLogin ?
                    <div>
                        <div className="border-b p-4 text-center font-bold text-xl">Đăng nhập</div>
                        <div className="p-4 px-8  flex flex-col">
                            <label htmlFor="sdt" className='py-4'>Số điện thoại:</label>
                            <input type="text" name='sdt' className='border px-3 py-2' placeholder='Số điện thoại' onInput={(e) => {
                                setAccount(e.target.value)
                            }} value={account} />
                            <label htmlFor="mk" className='py-4'>Mật khẩu:</label>
                            <input type="password" name='mk' className='border px-3 py-2' placeholder='Mật khẩu' value={password} onInput={e => setPassword(e.target.value)} />
                            <span className='py-6'><Button className="mx-auto" onClick={onLogin}>Đăng nhập</Button></span>
                            <p>Bạn chưa có tài khoản? <span className='text-red-500 font-semibold cursor-pointer' onClick={() => {
                                setAccount("")
                                setPassword("")
                                setIsLogin(false)
                            }}>Đăng kí ngay</span></p>
                        </div>
                        <AiFillCloseCircle size={24} className="absolute top-2 right-2" onClick={handleCloseModal} />
                    </div>
                    :
                    // dang ki
                    <div>
                        <div className="border-b p-4 text-center font-bold text-xl">Đăng Ký</div>
                        <div className="p-4 px-8  flex flex-col">
                            <label htmlFor="sdt" className='py-4'>Số điện thoại:</label>
                            <input type="text" name='sdt' className='border px-3 py-2' placeholder='Số điện thoại' onInput={(e) => {
                                setAccount(e.target.value)
                            }} value={account} />
                            <label htmlFor="mk" className='py-4'>Mật khẩu:</label>
                            <input type="password" name='mk' className='border px-3 py-2' placeholder='Mật khẩu' value={password} onInput={e => setPassword(e.target.value)} />
                            <span className='py-6'><Button className="mx-auto" onClick={handleRegister}>Đăng Ký</Button></span>
                            <p>Bạn đã có tài khoản? <span className='text-red-500 font-semibold cursor-pointer' onClick={() => setIsLogin(true)}>Đăng Nhập</span></p>
                        </div>
                        <AiFillCloseCircle size={24} className="absolute top-2 right-2" onClick={handleCloseModal} />
                    </div>}
            </div>
            <SweetAleart title="Đăng ký thành công" ref={registerSuccessRef} />
            <SweetAleart title="Số điện thoại đẫ tồn tại" ref={registerFaileRef} success={false} />
            <SweetAleart title="Đăng nhập thành công " ref={loginSuccessRef} />
            <SweetAleart title="Đăng nhập thất bại" ref={loginFaileRef} success={false} />
            <SweetAleart title="Vui lòng nhập đầy đủ thông tin" ref={alertRef} success={false} />
        </div>
    )
})

export default Form