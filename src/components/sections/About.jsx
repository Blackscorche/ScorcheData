import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

function About() {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center relative p-8'>
      <RevealOnScroll>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text'>
            About ScorcheNet
          </h2>
          <p className='text-gray-300 text-lg mb-8'>
            At ScorcheNet, we believe that digital transactions should be <span className='font-semibold'>fast, affordable, and hassle-free</span>. That's why we've built a platform that simplifies the way you buy data, swap airtime, pay bills, and more—so you can focus on what truly matters.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[ 
              { title: 'Instant Data & Airtime', desc: 'Buy affordable data and airtime instantly, hassle-free.' },
              { title: 'Airtime Swap', desc: 'Convert unused airtime to cash or data easily.' },
              { title: 'Cable TV Subscriptions', desc: 'Recharge your cable TV quickly and securely.' },
              { title: 'Electricity Bill Payments', desc: 'Pay your electricity bills effortlessly.' }
            ].map((service, index) => (
              <div 
                key={index} 
                className='p-6 rounded-xl border border-white/10 bg-transparent backdrop-blur-lg shadow-lg text-left transform transition duration-300 hover:scale-105 hover:shadow-2xl min-h-[180px] flex flex-col justify-between'
              >
                <h3 className='text-xl font-bold mb-3 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text'>
                  {service.title}
                </h3>
                <p className='text-gray-300'>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <p className='text-gray-400 text-lg mt-8'>
            <span className='font-semibold'>…and more!</span>
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
