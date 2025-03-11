import React from 'react';
import RevealOnScroll from '../RevealOnScroll'
function Pricing() {
  const plans = [
    {
      category: 'MTN Data',
      details: [
        { amount: '1GB', price: '₦250', validity: '30 Days' },
        { amount: '2GB', price: '₦500', validity: '30 Days' },
        { amount: '5GB', price: '₦1250', validity: '30 Days' },
      ],
    },
    {
      category: 'Airtel Data',
      details: [
        { amount: '1GB', price: '₦270', validity: '30 Days' },
        { amount: '2GB', price: '₦520', validity: '30 Days' },
        { amount: '5GB', price: '₦1300', validity: '30 Days' },
      ],
    },
    {
      category: 'Glo Data',
      details: [
        { amount: '1GB', price: '₦230', validity: '30 Days' },
        { amount: '2GB', price: '₦480', validity: '30 Days' },
        { amount: '5GB', price: '₦1200', validity: '30 Days' },
      ],
    },
    {
      category: '9mobile Data',
      details: [
        { amount: '1GB', price: '₦280', validity: '30 Days' },
        { amount: '2GB', price: '₦550', validity: '30 Days' },
        { amount: '5GB', price: '₦1350', validity: '30 Days' },
      ],
    },
    {
      category: 'Electricity Bills',
      details: [
        { amount: '₦1000', price: '₦980', validity: 'Instant Payment' },
        { amount: '₦5000', price: '₦4850', validity: 'Instant Payment' },
        { amount: '₦10000', price: '₦9700', validity: 'Instant Payment' },
      ],
    },
    {
      category: 'Cable TV Subscriptions',
      details: [
        { amount: 'DStv Padi', price: '₦2500', validity: '30 Days' },
        { amount: 'GOtv Max', price: '₦3600', validity: '30 Days' },
        { amount: 'StarTimes Basic', price: '₦1700', validity: '30 Days' },
      ],
    },
  ];

  return (
    <section id='pricing' className='min-h-screen py-16 px-6 text-center text-white'>
      <RevealOnScroll>
        <h2 className='text-4xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text'>
          Pricing Plans
        </h2>
        <p className='text-gray-400 mb-12 max-w-4xl mx-auto'>
          Choose a plan that suits your needs. We offer the best rates for data, electricity bills, and cable subscriptions.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {plans.map((plan, index) => (
            <div key={index} className='p-6 border border-white/10 rounded-lg backdrop-blur-lg shadow-lg h-full hover:scale-105 transition-transform duration-300'>
              <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text'>
                {plan.category}
              </h3>
              <ul className='space-y-4'>
                {plan.details.map((item, idx) => (
                  <li key={idx} className='text-gray-300'>
                    <span className='font-bold'>{item.amount}</span> - {item.price} ({item.validity})
                  </li>
                ))}
              </ul>
              <button className='mt-4 bg-red-500 py-2 px-4 rounded font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </RevealOnScroll>

    </section>
  );
}

export default Pricing;
