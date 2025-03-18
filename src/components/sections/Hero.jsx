import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For smooth animations
import RevealOnScroll from '../RevealOnScroll';

function Home() {
    return (
        <section 
            id='home' 
            className='min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#0D0D11] to-[#090909]'
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

            <RevealOnScroll>
                <div className="text-center z-10 px-6">
                    {/* Title Animation */}
                    <motion.h1
                        className='text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent leading-tight'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Welcome to Scorche<span className='text-white/80'>Pay</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className='text-gray-400 text-lg mb-8 max-w-xl mx-auto'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Powered by ScorcheTech, we bring you fast, secure, and affordable digital solutions. Join a community that values innovation and accessibility.
                    </motion.p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Login Button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                to="/signin" 
                                className='border border-red-500 text-red-500 py-3 px-6 rounded font-medium transition duration-200 
                                hover:bg-red-500/10 hover:-translate-y-0.5'
                            >
                                Login
                            </Link>
                        </motion.div>

                        {/* Signup Button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                to="/signup"
                                className="text-gray-300 hover:text-white transition-all duration-300 ease-in-out 
                                bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded border border-white/10 
                                hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_4px_12px_rgba(255,30,46,0.3)] font-bold"
                            >
                                Sign Up
                            </Link>
                        </motion.div>
                    </div>

                    {/* Explore Services */}
                    <motion.div 
                        className="mt-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a 
                            href="#services" 
                            className='text-red-500 text-lg font-semibold transition-all duration-300 hover:text-xl active:scale-105'
                        >
                            Explore Services &rarr;
                        </a>
                    </motion.div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Home;
