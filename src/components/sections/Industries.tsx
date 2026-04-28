"use client";

import { motion } from "framer-motion";
import { HeartPulse, Landmark, ShoppingBag, MonitorPlay, Shield } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: <HeartPulse size={32} /> },
  { name: "Finance", icon: <Landmark size={32} /> },
  { name: "Retail", icon: <ShoppingBag size={32} /> },
  { name: "Technology", icon: <MonitorPlay size={32} /> },
  { name: "Government", icon: <Shield size={32} /> },
];

export default function Industries() {
  return (
    <section className="py-20 bg-[#111827] text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-400">Delivering specialized IT talent and solutions across major sectors.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 w-32 md:w-40 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00B4D8] group-hover:bg-[#00B4D8] group-hover:text-white transition-all duration-300">
                {ind.icon}
              </div>
              <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
