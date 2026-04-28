"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Let's Discuss Your Business Needs
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to scale your team or start a new technology project? Contact us today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
          
          {/* Left: Contact Info */}
          <div className="lg:w-2/5 bg-[#02529B] text-white p-10 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00B4D8] rounded-full filter blur-[80px] opacity-50 pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-white/80 mb-12">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1"><PhoneCall size={24} className="text-[#00B4D8]"/></div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-white/80">+1 314-675-0701</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1"><Mail size={24} className="text-[#00B4D8]"/></div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-white/80">info@arritsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1"><MapPin size={24} className="text-[#00B4D8]"/></div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-white/80">100 Chesterfield Business Parkway,<br/>Suite 200, Chesterfield, MO 63005</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-3/5 p-10 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What can we help you with?</label>
                <div className="flex flex-wrap gap-4">
                  {["Hire Talent", "Find a Job", "Consulting", "Other"].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="inquiry" className="text-[#02529B] focus:ring-[#02529B]" />
                      <span className="text-sm text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="w-full bg-[#02529B] text-white py-4 rounded-md font-semibold hover:bg-[#013a70] transition-colors flex items-center justify-center gap-2 text-lg">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-16 h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-300 flex items-center justify-center text-gray-500 font-medium">
          [Google Maps Embed Placeholder: 100 Chesterfield Business Parkway, Chesterfield, MO]
        </div>
      </div>
    </section>
  );
}
