import { motion } from "framer-motion";

const plans = [
  {
    category: "MTN Data",
    popular: true,
    details: [
      { amount: "1GB", price: "₦250", validity: "30 Days" },
      { amount: "2GB", price: "₦500", validity: "30 Days" },
      { amount: "5GB", price: "₦1250", validity: "30 Days" },
    ],
  },
  {
    category: "Airtel Data",
    details: [
      { amount: "1GB", price: "₦270", validity: "30 Days" },
      { amount: "2GB", price: "₦520", validity: "30 Days" },
      { amount: "5GB", price: "₦1300", validity: "30 Days" },
    ],
  },
  {
    category: "Glo Data",
    popular: true,
    details: [
      { amount: "1GB", price: "₦230", validity: "30 Days" },
      { amount: "2GB", price: "₦480", validity: "30 Days" },
      { amount: "5GB", price: "₦1200", validity: "30 Days" },
    ],
  },
  {
    category: "9mobile Data",
    details: [
      { amount: "1GB", price: "₦280", validity: "30 Days" },
      { amount: "2GB", price: "₦550", validity: "30 Days" },
      { amount: "5GB", price: "₦1350", validity: "30 Days" },
    ],
  },
  {
    category: "Electricity Bills",
    details: [
      { amount: "₦1000", price: "₦980", validity: "Instant Payment" },
      { amount: "₦5000", price: "₦4850", validity: "Instant Payment" },
      { amount: "₦10000", price: "₦9700", validity: "Instant Payment" },
    ],
  },
  {
    category: "Cable TV Subscriptions",
    details: [
      { amount: "DStv Padi", price: "₦2500", validity: "30 Days" },
      { amount: "GOtv Max", price: "₦3600", validity: "30 Days" },
      { amount: "StarTimes Basic", price: "₦1700", validity: "30 Days" },
    ],
  },
];

const Pricing = () => {
  const handlePurchase = (category) => {
    alert(`Buying plan for ${category}`);
  };

  return (
    <section id="pricing" className="min-h-screen flex items-center justify-center bg-black py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold mb-8 pb-2 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          Pricing Plans
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Choose a plan that fits your needs. We offer the best rates for data, electricity bills, and cable subscriptions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg transition-all 
              duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500/50 group"
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Popular
                </motion.div>
              )}

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                {plan.category}
              </h3>

              <ul className="space-y-4 text-gray-200">
                {plan.details.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span className="font-semibold">{item.amount}</span>
                    <span className="text-gray-300">{item.price}</span>
                    <span className="text-xs text-gray-500">({item.validity})</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => handlePurchase(plan.category)}
                className="mt-6 w-full bg-red-500 py-3 px-6 rounded-lg font-medium transition-all duration-200 
                hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
