import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500  bg-clip-text text-transparent leading-tight'>
                    Welcome to Scorche<span className='text-white/80'>Pay</span>
                </h1>
                <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                    Powered by ScorcheTech offers fast, secure, and affordable digital services. Join a community that values innovation and accessibility.
                </p>

                <div className="flex flex-wrap justify-center space-x-4">
                    <Link to="/SignIn" className='border border-red-500 text-red-500 py-3 px-6 rounded font-medium transition duration-200 hover:bg-red-500/10 hover:-translate-y-0.5'>
                        Login
                    </Link>

                    <Link to="/SignUp" className='bg-red-500 py-3 px-6 rounded font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'>
                        Sign Up
                    </Link>
                </div>

                {/* Animated text link with color transition */}
                <div className="mt-4">
                    <a 
                        href="#services" 
                        className='text-red-500 text-lg font-medium transition-all duration-300 hover:text-xl hover:scale-110 active:scale-105'
                    >
                        Explore Services
                    </a>
                </div>
            </div>
        </RevealOnScroll>
    </section>
  )
}

export default Home
