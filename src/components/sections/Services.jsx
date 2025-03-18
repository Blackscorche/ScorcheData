import { Bolt, DollarSign, Tv, Zap } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

const services = [
  { title: "Data Plans", description: "Get fast and affordable data bundles for all networks with instant activation.", icon: <Bolt className="h-10 w-10 text-red-500" />, action: "buyData" },
  { title: "Airtime Recharge", description: "Top up your mobile phone anytime, anywhere with our seamless recharge service.", icon: <DollarSign className="h-10 w-10 text-orange-500" /> },
  { title: "Cable Subscriptions", description: "Renew your TV subscription in seconds and never miss your favorite shows.", icon: <Tv className="h-10 w-10 text-blue-500" /> },
  { title: "Electricity Bills", description: "Pay your electricity bills easily and enjoy uninterrupted power supply.", icon: <Zap className="h-10 w-10 text-green-500" /> },
];

const Services = () => {
  const [loading, setLoading] = useState(false);

  const buyData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://n3tdata.com/api/data",
        {
          network: 1,
          phone: "09037959033",
          data_plan: 1,
          "request-id": "Data_" + Date.now(),
        },
        {
          headers: {
            Authorization: `Token YOUR_AUTH_TOKEN`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Success: " + response.data.message);
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
    setLoading(false);
  };

  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-black py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} // Animation triggers again when scrolling
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl pb-2 font-extrabold mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We provide fast, reliable, and seamless services tailored to your daily needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // Ensures animation replays on scroll
              className="relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg transition-all 
              duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500/50 group"
            >
              <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-100 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
  
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
