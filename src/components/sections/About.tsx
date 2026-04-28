"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "20+ Years of Industry Experience",
  "Tailored IT Staffing Models",
  "Enterprise-grade Security & Compliance",
  "Agile & Scalable Consulting Services",
];

export default function About() {
  return (
    <section id="about" className="section bg-white overflow-hidden relative">
      {/* Subtle Logo Watermark */}
      <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <Image
          src="/assets/images/logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                [Team Collaboration Image Placeholder]
              </div>
              {/* <Image src="/assets/images/team.jpg" alt="Arrit Solutions Team" fill className="object-cover" /> */}
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="text-[#02529B] font-bold text-4xl">20+</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wider leading-tight">
                Years of <br/> Excellence
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm mb-3">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6 leading-tight">
              Driving Digital Transformation Through Exceptional Talent
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              ARR IT SOLUTIONS INC is a premier IT consulting and staffing firm dedicated to empowering businesses with cutting-edge technology and world-class professionals. Our mission is to bridge the gap between complex business challenges and innovative technical solutions.
            </p>
            <p className="text-gray-600 mb-8">
              With a deep understanding of the evolving tech landscape, we specialize in delivering scalable, secure, and high-performance solutions tailored to your unique needs. Whether you need an entire engineering team or a strategic consultant, we are your trusted partner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#00B4D8]" size={20} />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#02529B] text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-[#013a70] transition-colors shadow-md">
              Learn More About Our Mission
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
