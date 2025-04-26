import KyberNetLogo from './assets/KyberNetLogo(1).svg'
import BurgerMenu from './assets/burger-menu-svgrepo-com.svg'
import XIcon from './assets/times-svgrepo-com.svg'
import { useState, useEffect } from 'react'

function SideBar({ isOpen, handleMenuDiv }) {
    return (
        <>
            <div className='md:hidden lg:hidden'>
                <img src={BurgerMenu} alt="Burger Menu" className={`fixed ${isOpen ? 'scale-0' : 'scale-100'} w-24 h-10 transition-all ease-in-out z-10 right-0 block object-contain`} onClick={() => handleMenuDiv()}></img>
                <img src={XIcon} alt="Burger Menu" className={`fixed ${isOpen ? 'scale-125' : 'scale-0'} w-24 h-10 transition-all ease-in-out z-10 right-0 block object-contain`} onClick={() => handleMenuDiv()}></img>
                <div className={`fixed ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 w-[280px] h-screen right-0 top-0 bg-blue-100 font-inter`}>
                    <div className='ml-12 mt-28 tracking-wide text-gray-700'>
                        <h2 className={`${isOpen ? 'translate-x-0' : 'translate-x-100'} text-sm font-semibold mb-10 tracking-widest transition-all duration-500 text-black`}>SITEMAP</h2>
                        <ul className='flex flex-col space-y-6 text-3xl font-bold transition-colors'>
                                <li className={`${isOpen ? 'translate-x-0 duration-600' : 'translate-x-100 duration-600'} active:text-red-600 transition-all active:duration-300`}>Team</li>
                                <li className={`${isOpen ? 'translate-x-0 duration-700' : 'translate-x-100 duration-700'} active:text-red-600 transition-all active:duration-300`}>About Us</li>
                                <li className={`${isOpen ? 'translate-x-0 duration-800' : 'translate-x-100 duration-800'} active:text-red-600 transition-all active:duration-300`}>Clients</li>
                                <li className={`${isOpen ? 'translate-x-0 duration-900' : 'translate-x-100 duration-900'} active:text-red-600 transition-all active:duration-300`}>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function Navbar() {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    function handleMenuDiv() {
        if (sideBarOpen) {
            setSideBarOpen(false);
        }
        else {
            setSideBarOpen(true);
        }
    }

    return (
        <>
            <div className='fixed top-0 w-screen h-26 p-6 flex content-center items-center justify-between font-inter'>
                <div className=''>
                    <img src={KyberNetLogo} alt="KyberNet LLC" className='w-40 h-16 -ml-5'></img>
                </div>
                <div className='hidden md:block lg:block bg-orange-100 px-5 py-3 rounded-2xl'>
                    <ul className='flex space-x-6 text-lg font-normal text-gray-800'>
                        <li>Team</li>
                        <li>Clients</li>
                        <li>About Us</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <button className='hidden md:block lg:block bg-blue-300 px-5 py-3 rounded-2xl duration-500'>
                    Contact
                </button>
                <SideBar isOpen={sideBarOpen} handleMenuDiv={handleMenuDiv}/>
            </div>
        </>
    )
}
  
export default Navbar