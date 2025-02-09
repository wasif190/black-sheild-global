import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { NavLink, useLocation } from 'react-router-dom'; // For route navigation
import navLogo from '../assets/logo-bsg.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    const [isUpperNavVisible, setIsUpperNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const location = useLocation(); // Hook to get current route

    // Function to close the menu
    const closeMenu = () => setisOpen(false);
  
    // Determine the currently visible navigation items
    const isAboutPage = location.pathname === '/about';
    const isContactPage = location.pathname === '/contact';

    // Reset isOpen when switching to desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setisOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle scroll to hide/show upperNav
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsUpperNavVisible(false);
            } else {
                // Scrolling up
                setIsUpperNavVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className='w-full fixed top-0 left-0 z-20'>
            <div
                id='upperNav'
                className={`lg:flex hidden bg-blue-600 text-white justify-between md:px-[7%] px-[4%] py-3 items-center ${
                    isUpperNavVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className='flex gap-[3rem] items-center'>
                    <div className='flex gap-[1.5rem] items-center font-semibold'>
                        <div className='flex gap-2 items-center'>
                            <span className='flex items-center p-1 rounded-full bg-white text-red-600'>
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <a href='mailto:info@blacksheildglobal.com'>info@blacksheildglobal.com</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='flex items-center p-1 rounded-full bg-white text-red-600'>
                                <ion-icon name="call-outline"></ion-icon>
                            </span>
                            <a href='tel:+919934660878'>+91 9934660878</a>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <a href='/instagram' className='h-7 w-7 flex items-center justify-center rounded-full bg-white text-red-600'>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                
                        <a href='/linkedin' className='h-7 w-7 flex items-center justify-center rounded-full bg-white text-red-600'>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
        
                        <a href='/twitter' className='h-7 w-7 flex items-center justify-center rounded-full bg-white text-red-600'>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </div>
                </div>

                <button className='py-2 bg-white text-red-600 px-10 border'>
                    Apply Now
                </button>
            </div>

            <div className={`md:px-[7%] px-[4%] py-4 md:flex justify-between border-b items-center bg-white
                ${ isUpperNavVisible ? '': 'fixed top-0 left-0 right-0'}`}>
                <NavLink to="/" onClick={closeMenu}>
                    <div>
                        <div className='flex gap-4'>
                            <div className='md:w-[70px] w-[53px]'>
                                <img src={navLogo} alt="Logo" />
                            </div>
                            <div className='md:mt-1 mt-2'>
                                <h2 className='uppercase md:text-3xl text-2xl font-extrabold leading-6'>Black she<span className='text-red-600'>el</span>d</h2>
                                <p className='uppercase md:text-lg'>global</p>
                                <div className='text-gray-700 flex lg:flex-row flex-col'>
                                    <p>Registered Under Govt. of India  |</p>  
                                    <p>Reg No: ACJ-0190</p>
                                </div>
                            </div>
                        </div>
                        {/* <p className='text-gray-700 ml-[5rem] mt-1.5'>Registered Under Govt. of India  |  Reg No: ACJ-0190</p> */}
                    </div>
                </NavLink>

                <div
                    onClick={() => setisOpen(!isOpen)}
                    className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'
                >
                    {isOpen ? <XMarkIcon /> : <Bars3Icon />}
                </div>

                <div>
                    <ul
                        className={`
                        md:flex pl-9 md:pl-8 md:items-center md:pb-0 md:pt-0 pt-6 pb-12 absolute md:static 
                        md:z-auto -z-10 left-0 w-full transition-all bg-white text-lg
                        ${isOpen ? 'top-12 border-b' : 'top-[-490px]'}
                    `}
                    >
                        <li className='md:ml-8 text-lg md:my-0 my-7'>
                            <NavLink
                            to="/"
                            className="text-gray-800 hover:text-gray-400 duration-500"
                            onClick={closeMenu}
                            >
                            Home
                            </NavLink>
                        </li>

                        {/* About Us (Visible except on /about) */}
                        {!isAboutPage && (
                            <li className='md:ml-8 text-lg md:my-0 my-7'>
                            <NavLink
                                to="/about"
                                className="text-gray-800 hover:text-gray-400 duration-500"
                                onClick={closeMenu}
                            >
                                About Us
                            </NavLink>
                            </li>
                        )}

                        {/* Contact Us (Visible except on /contact) */}
                        {!isContactPage && (
                            <li className='md:ml-8 text-lg md:my-0 my-7'>
                            <NavLink
                                to="/contact"
                                className="text-gray-800 hover:text-gray-400 duration-500"
                                onClick={closeMenu}
                            >
                                Contact Us
                            </NavLink>
                            </li>
                        )}

                        {/* Service (Only on home page) */}
                        {!(isAboutPage || isContactPage) && (
                            <li className='md:ml-8 text-lg md:my-0 my-7'>
                            <ScrollLink
                                to="service"
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                                onClick={closeMenu}
                            >
                                Service
                            </ScrollLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
