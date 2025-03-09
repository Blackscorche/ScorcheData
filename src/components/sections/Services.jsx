import RevealOnScroll from '../RevealOnScroll'


const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-transparent py-10">
      <RevealOnScroll>


        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Data Plans", "Airtime Recharge", "Cable Subscriptions", "Electricity Bills"].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-transparent backdrop-blur-lg shadow-lg transition duration-300 
                hover:backdrop-blur-2xl hover:bg-transparent hover:border-red-500/50 
                hover:shadow-[0_4px_16px_rgba(239,68,68,0.2)] text-left"
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                  {service}
                </h3>
                <p className="text-gray-300 mb-4">
                  Get the best {service.toLowerCase()} at unbeatable prices with instant delivery.
                </p>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  Learn More 
                </a>
              </div>
            ))}
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};

export default Services;