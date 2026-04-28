"use client";

import { motion } from "framer-motion";
import { Lightbulb, FileSearch, Rocket, HeadphonesIcon } from "lucide-react";

const processSteps = [
  {
    title: "Understand",
    desc: "We begin by deeply understanding your business goals, technical requirements, and company culture.",
    icon: <Lightbulb className="text-white" size={24} />
  },
  {
    title: "Plan",
    desc: "Our architects and consultants devise a strategic roadmap and resource allocation plan.",
    icon: <FileSearch className="text-white" size={24} />
  },
  {
    title: "Deliver",
    desc: "We execute the strategy with precision, deploying top talent and robust technical solutions.",
    icon: <Rocket className="text-white" size={24} />
  },
  {
    title: "Support",
    desc: "Continuous monitoring, maintenance, and optimization to ensure long-term success.",
    icon: <HeadphonesIcon className="text-white" size={24} />
  }
];

export default function Process() {
  return (
    <section id="process" className="section bg-gray-50 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm mb-3">Our Methodology</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            A Proven Approach to Success
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#02529B] to-[#00B4D8] rounded-full transform scale-[0.85] group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="relative z-10">{step.icon}</div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#111827] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#111827] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
