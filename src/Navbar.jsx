import KyberNetLogo from './assets/KyberNetLogo(1).svg'
import KyberNetLogoNoBackground from './assets/KyberNetLogoNoBackground.png'
import BurgerMenu from './assets/burger-menu-svgrepo-com.svg'
import XIcon from './assets/times-svgrepo-com.svg'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function SideBar({ isOpen, handleMenuDiv }) {
    return (
        <>
            <div className='md:hidden lg:hidden'>
                <div className='sticky top-0 z-10'>
                    <img src={BurgerMenu} alt="Burger Menu" className={`${isOpen ? 'scale-0' : 'scale-100'} absolute w-24 h-10 transition-all ease-in-out block object-contain`} onClick={() => handleMenuDiv()}></img>
                    <img src={XIcon} alt="Burger Menu" className={`${isOpen ? 'scale-125' : 'scale-0'} w-24 h-10 transition-all ease-in-out block object-contain`} onClick={() => handleMenuDiv()}></img>
                </div>
                <div className={`fixed ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 w-[280px] h-screen right-0 top-0 bg-blue-100 font-inter`}>
                    <div className='ml-12 mt-28 tracking-wide text-gray-700'>
                        <h2 className={`${isOpen ? 'translate-x-0' : 'translate-x-100'} text-sm font-semibold mb-10 tracking-widest transition-all duration-500 text-black`}>SITEMAP</h2>
                        <ul className='flex flex-col space-y-6 text-3xl font-bold transition-colors'>
                                <Link to='/home'><li className={`${isOpen ? 'translate-x-0 duration-600' : 'translate-x-100 duration-600'} active:text-red-600 transition-all active:duration-300 hover:text-red-600 hover:duration-50`}>Home</li></Link>
                                <Link to='/team'><li className={`${isOpen ? 'translate-x-0 duration-700' : 'translate-x-100 duration-700'} active:text-red-600 transition-all active:duration-300 hover:text-red-600 hover:duration-50`}>Team</li></Link>
                                <Link to='/clients'><li className={`${isOpen ? 'translate-x-0 duration-800' : 'translate-x-100 duration-800'} active:text-red-600 transition-all active:duration-300 hover:text-red-600 hover:duration-50`}>Clients</li></Link>
                                <Link to='/about'><li className={`${isOpen ? 'translate-x-0 duration-900' : 'translate-x-100 duration-900'} active:text-red-600 transition-all active:duration-300 hover:text-red-600 hover:duration-50`}>About us</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function Navbar() {

    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    function handleMenuDiv() {
        if (sideBarOpen) {
            setSideBarOpen(false);
        }
        else {
            setSideBarOpen(true);
        }
    }

    const handleScroll = () => {
        const position = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`bg-gray-700 sticky top-0 w-screen h-26 p-18 px-6 md:px-18 lg:px-18 xl:px-18 2xl:px-18 flex content-center items-center justify-between font-inter tracking-wide transition-colors ${scrollPosition > 95 && 'bg-white duration-200'}`}>
                <div className='relative'>
                    <Link to="/">
                        <img src={KyberNetLogoNoBackground} alt="KyberNet LLC" className='w-44 h-20 bg-white px-4 rounded-2xl'></img>
                    </Link>
                </div>
                <div className='hidden md:block lg:block px-5 py-3 rounded-2xl'>
                    <ul className={`flex space-x-12 md:space-x-8 text-lg font-semibold duration-200 ${scrollPosition > 95 ? 'text-gray-700' : 'text-white'} tracking-widest`}>
                        <Link to="/home"><li className='hover:text-red-300'>Home</li></Link>
                        <Link to="/team"><li className='hover:text-red-300'>Team</li></Link>
                        <Link to="/clients"><li className='hover:text-red-300'>Clients</li></Link>
                        <Link to="/about"><li className='hover:text-red-300'>About Us</li></Link>
                    </ul>
                </div>
                <button className='hidden md:block lg:block bg-blue-400  hover:scale-105 px-8 py-4 rounded-2xl duration-500 text-lg font-bold text-black'>
                    Contact Us
                </button>
                <SideBar isOpen={sideBarOpen} handleMenuDiv={handleMenuDiv}/>
            </div>
        </>
    )
}
  
export default Navbar