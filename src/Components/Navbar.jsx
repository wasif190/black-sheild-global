
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const closeMenu = () => {
        setIsNavActive(false)
    }
    
    return (
        <header className={`px-[4%] z-50 bg-white fixed top-0 left-0 right-0 lg:px-[10%] py-4 ${isNavActive ? '': 'border-b border-[#e0e0e0]'}`}>
            <nav className='flex justify-between items-end'>
                <header className='w-[220px]'>
                    <img src={Logo}/>
                </header>

                <ul className={`item-center gap-[3rem] lg:flex pb-2
                    ${isNavActive ? 'absolute w-full gap-[2rem] top-[5.4rem] bg-white border-b border-t left-0 pt-5 pb-5 px-[4%] lg:px-[10%] grid grid-cols-3 rounded-b-2xl transition-all': 'hidden'}`}>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="home"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-estate"></i> 
                            <span className='hover-nav'>Home</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="service"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-user"></i>
                            <span className='hover-nav'>Service</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="about"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-file-alt"></i>
                            <span className='hover-nav'>About Us</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="contact"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-scenery"></i>
                            <span className='hover-nav'>Contact</span>
                        </li>
                    </Link>
                </ul>

                <div onClick={toggleNav} className='cursor-pointer lg:hidden block text-3xl pb-2'>
                    {
                        isNavActive ? <i class="ri-close-large-line"></i>: <i class="ri-menu-line"></i>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
