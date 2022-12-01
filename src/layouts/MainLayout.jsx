import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
function MainLayout({ children }) {

    return (
        <div className='relative'>
            <Header />
            <div className="py-header-h">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout