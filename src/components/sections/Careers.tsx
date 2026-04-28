"use client";

import { motion } from "framer-motion";
import { UploadCloud, ChevronRight, Briefcase } from "lucide-react";

const jobCategories = [
  "Software Development",
  "AI/Data Science",
  "Cloud/DevOps",
  "Cybersecurity",
  "SAP/Oracle"
];

const featuredJobs = [
  { title: "Senior Full Stack Engineer", type: "Full-Time", location: "Remote (US)", category: "Software Development" },
  { title: "Cloud Solutions Architect", type: "Contract", location: "Hybrid", category: "Cloud/DevOps" },
  { title: "SAP ABAP Developer", type: "Full-Time", location: "On-site", category: "SAP/Oracle" },
  { title: "Lead Data Scientist", type: "Contract-to-Hire", location: "Remote", category: "AI/Data Science" }
];

export default function Careers() {
  return (
    <section id="careers" className="section bg-white border-y border-gray-100">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Job Listings */}
          <div className="lg:w-2/3">
            <h4 className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm mb-3">Join Our Network</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">
              Current Opportunities
            </h2>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button className="px-4 py-2 bg-[#02529B] text-white rounded-full text-sm font-medium">All Roles</button>
              {jobCategories.map(cat => (
                <button key={cat} className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
                  {cat}
                </button>
              ))}
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
              {featuredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border border-gray-200 rounded-xl hover:border-[#00B4D8] hover:shadow-lg transition-all cursor-pointer bg-white"
                >
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#02529B] transition-colors mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="text-[#00B4D8] font-medium">{job.category}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#00B4D8] group-hover:text-white transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button className="mt-8 text-[#02529B] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Open Positions <ChevronRight size={18} />
            </button>
          </div>

          {/* Right: Resume Upload CTA */}
          <div className="lg:w-1/3">
            <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-8 sticky top-24">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-[#00B4D8]">
                <UploadCloud size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">Don&apos;t see a fit?</h3>
              <p className="text-gray-600 mb-8">
                Submit your resume and our recruitment team will reach out when a position matching your skills becomes available.
              </p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-white hover:border-[#00B4D8] hover:bg-blue-50/50 transition-colors cursor-pointer group">
                <p className="text-sm text-gray-500 mb-2 group-hover:text-[#02529B] font-medium">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-400">PDF, DOCX, up to 10MB</p>
              </div>
              
              <button className="w-full mt-6 bg-[#111827] text-white py-3 rounded-md font-semibold hover:bg-[#02529B] transition-colors">
                Submit Resume
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
