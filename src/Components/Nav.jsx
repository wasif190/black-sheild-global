import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { NavLink, useLocation } from 'react-router-dom'; // For route navigation
import Logo from '../assets/logo.png'; // Ensure the path is correct

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Hook to get current route

  // Function to close the menu
  const closeMenu = () => setOpen(false);

  // Determine the currently visible navigation items
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';

  return (
    <nav className='shadow-md w-full fixed top-0 left-0 bg-white z-50'>
      <div className='md:flex items-center justify-between py-6 md:px-24 px-6'>
        {/* Logo */}
        <div className='cursor-pointer w-48'>
          <NavLink to="/" onClick={closeMenu}>
            <img src={Logo} alt="Company Logo" className='w-full h-auto' />
          </NavLink>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${
            open ? 'top-20 rounded-b-lg' : 'top-[-490px]'
          }`}
        >
          {/* Home */}
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
    </nav>
  );
};

export default Nav;
