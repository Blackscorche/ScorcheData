import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/ScorcheLogo.png';

function Navbar({ menuOpen, setMenuOpen }) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[92%] z-40 backdrop-blur-none shadow-none">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="flex items-center justify-between h-16 space-x-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center font-mono text-xl font-bold text-white">
                        <img src={Logo} width={40} />
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text pt-2">
                            Scorche<span className='text-white/80'>net</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>

                        <Link to="/dashboard"
                            className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(259,30,46,0.2)] font-bold">
                            Login
                        </Link>

                    </div>

                    {/* Burger Menu (Mobile Only) */}
                    <div
                        className="md:hidden text-white text-xl cursor-pointer z-50"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
