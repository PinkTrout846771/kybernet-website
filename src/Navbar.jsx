import KyberNetNoLogo from './assets/Screenshot_2025-04-29_010309-removebg-preview.png'
import BurgerMenu from './assets/burger-menu-svgrepo-com.svg'
import XIcon from './assets/times-svgrepo-com.svg'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function SideBar({ isOpen, handleMenuDiv }) {
    return (
        <>
            <div className='md:hidden lg:hidden antialiased flex'>
                <div className='sticky top-0 z-10 flex justify-end cursor-pointer'>
                    <img src={BurgerMenu} alt="Burger Menu" className={`${isOpen ? 'scale-0' : 'scale-100'} absolute w-10 h-10 transition-all ease-in-out block object-contain`} onClick={() => handleMenuDiv()}></img>
                    <img src={XIcon} alt="Burger Menu" className={`${isOpen ? 'scale-125' : 'scale-0'} w-10 h-10 transition-all ease-in-out block object-contain`} onClick={() => handleMenuDiv()}></img>
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

function Navbar({ page }) {

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
/*relative rounded-full bg-amber-50 py-14 pt-6 mt-10 px-4*/
    return (
        <>
            <div className={`sticky z-50 top-0 w-screen h-20 p-12 px-6 md:px-18 flex content-center items-center justify-between font-inter antialiased tracking-wide transition-colors ${scrollPosition > 40 && 'bg-orange-100 duration-200'}`}>
                <div className='relative w-34 h-20 flex items-center'>
                    <Link to="/">
                        <img src={KyberNetNoLogo} alt="KyberNet LLC" className='object-contain'></img>
                    </Link>
                </div>
                <div className='hidden md:block lg:block px-5 py-3 rounded-2xl'>
                    <ul className={`flex space-x-12 md:space-x-8 text-lg font-semibold duration-200 ${scrollPosition > 40 ? 'text-gray-700' : 'text-gray-900'} tracking-widest`}>
                        <Link to="/home"><li className={`hover:text-red-300 ${ page=='home' && 'text-red-300' }`}>Home</li></Link>
                        <Link to="/team"><li className={`hover:text-red-300 ${ page=='team' && 'text-red-300' }`}>Team</li></Link>
                        <Link to="/clients"><li className={`hover:text-red-300 ${ page=='clients' && 'text-red-300' }`}>Clients</li></Link>
                        <Link to="/about"><li className={`hover:text-red-300 ${ page=='about' && 'text-red-300' }`}>About Us</li></Link>
                    </ul>
                </div>
                <button className='hidden md:block lg:block bg-linear-to-l from-blue-300 to-blue-400  hover:from-blue-400 hover:to-blue-500 hover:-translate-y-2 hover:duration-500 duration-500 px-8 py-4 rounded-2xl text-lg font-bold text-gray-800'>
                    Contact Us
                </button>
                <SideBar isOpen={sideBarOpen} handleMenuDiv={handleMenuDiv}/>
            </div>
        </>
    )
}
  
export default Navbar