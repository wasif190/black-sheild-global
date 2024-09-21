
import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import hLogo from '../assets/home-outline.svg';

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
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                            <span className='hover-nav'>About</span>
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
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
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
