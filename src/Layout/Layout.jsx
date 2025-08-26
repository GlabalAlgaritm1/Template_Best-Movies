import React from 'react'
import Xeader from '../Components/Xeader'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const Layout = () => {
    return (
        <section className='bg-[#171818] text-white'>
            <Xeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}

export default Layout