import { ShieldCheck, DollarSign, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Instant Data & Airtime",
    description: "Top up your data and airtime in seconds—fast, secure, and hassle-free!",
    icon: <ShieldCheck className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Airtime to Cash",
    description: "Convert your unused airtime into cash or data instantly. No waste, just value!",
    icon: <DollarSign className="h-10 w-10 text-orange-500" />,
  },
  {
    title: "Cable & Electricity Bills",
    description: "Pay electricity, cable TV, and other bills in one click—stress-free living!",
    icon: <Globe className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "Fast Transactions",
    description: "Enjoy ultra-fast processing times for all services, ensuring a smooth experience.",
    icon: <Zap className="h-10 w-10 text-green-500" />,
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} // Replays animation when scrolling
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Title */}
        <h2 className="text-4xl pb-2 font-extrabold mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          Why Choose ScorchePay?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Experience seamless transactions, lightning-fast speeds, and unbeatable reliability.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // Animates again on scroll
              className="relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg transition-all 
              duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500/50 group"
            >
              <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-100 group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
