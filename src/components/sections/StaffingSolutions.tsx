"use client";

import { motion } from "framer-motion";
import { UserPlus, FileSignature, Briefcase, Network } from "lucide-react";

const staffingModels = [
  {
    title: "Contract Staffing",
    desc: "Flexible, short-term or long-term talent augmentation to scale your team based on project demands without long-term commitments.",
    icon: <FileSignature className="text-[#02529B]" size={32} />
  },
  {
    title: "Contract-to-Hire",
    desc: "Evaluate potential employees on the job before making a full-time hiring decision, reducing turnover risk and ensuring culture fit.",
    icon: <Briefcase className="text-[#02529B]" size={32} />
  },
  {
    title: "Direct Hire",
    desc: "Permanent placement solutions where we handle the end-to-end recruitment process to find you top-tier, committed professionals.",
    icon: <UserPlus className="text-[#02529B]" size={32} />
  },
  {
    title: "Project-Based Staffing",
    desc: "Deploy an entire managed team of experts dedicated to delivering your specific enterprise projects on time and within budget.",
    icon: <Network className="text-[#02529B]" size={32} />
  }
];

export default function StaffingSolutions() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Models */}
          <div className="lg:w-1/2">
            <h4 className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm mb-3">Our Models</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Flexible Staffing Solutions
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Every business has unique needs. We offer adaptable engagement models designed to seamlessly integrate with your organizational goals and timelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {staffingModels.map((model, index) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                >
                  <div className="mb-4">{model.icon}</div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{model.title}</h3>
                  <p className="text-sm text-gray-600">{model.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Flow Process */}
          <div className="lg:w-1/2 bg-[#02529B] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B4D8] rounded-full filter blur-[100px] opacity-30"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Our Placement Flow</h3>
            
            <div className="space-y-8 relative z-10">
              {[
                { step: "1", title: "Requirement Intake", desc: "We analyze your specific technical and cultural needs." },
                { step: "2", title: "Screening & Sourcing", desc: "Leveraging our vast network to identify top candidates." },
                { step: "3", title: "Technical Interview", desc: "Rigorous vetting by our internal subject matter experts." },
                { step: "4", title: "Placement", desc: "Seamless onboarding and integration into your team." },
                { step: "5", title: "Ongoing Support", desc: "Continuous performance monitoring and feedback loops." },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center font-bold group-hover:bg-[#00B4D8] group-hover:border-[#00B4D8] transition-colors">
                      {item.step}
                    </div>
                    {index !== 4 && <div className="w-[2px] h-full bg-white/20 my-2 group-hover:bg-[#00B4D8]/50 transition-colors"></div>}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
