"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
        {/* Placeholder: Replace src with an actual video file uploaded to /assets/videos/ */}
        {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
          <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02529B]/90 to-[#0f172a]/90 z-10"></div>
        
        {/* Subtle grid pattern for texture if video is missing */}
        <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
            Over 20 Years of IT Excellence
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Smart IT Staffing & Technology Solutions for <span className="text-[#00B4D8]">Growing Businesses</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Your trusted partner in enterprise consulting and top-tier talent placement. We bridge the gap between business challenges and technical reality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00B4D8] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-[#02529B] transition-all shadow-lg hover:shadow-xl"
            >
              Hire Talent <ArrowRight size={20} />
            </Link>
            <Link
              href="#careers"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Find Jobs <Search size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
