"use client";

import { motion } from "framer-motion";
import { 
  Code2, Terminal, Database, Cpu, BrainCircuit, 
  LineChart, Cloud, ShieldCheck, Lock, Building2 
} from "lucide-react";

const serviceCategories = [
  {
    title: "Software / Development",
    icon: <Code2 className="text-[#00B4D8]" size={28} />,
    roles: [
      { name: "Software Engineer", desc: "End-to-end software architecture and development." },
      { name: "Full Stack Developer", desc: "Bridging seamless front-end UX with robust back-end APIs." },
      { name: "Backend Developer", desc: "Scalable server-side logic and database management." },
      { name: "Frontend Developer", desc: "Interactive, responsive, and accessible UI engineering." },
    ]
  },
  {
    title: "AI / Data",
    icon: <BrainCircuit className="text-[#00B4D8]" size={28} />,
    roles: [
      { name: "Data Scientist", desc: "Extracting actionable insights through advanced analytics." },
      { name: "Machine Learning Engineer", desc: "Building predictive models and intelligent systems." },
      { name: "AI Engineer", desc: "Integrating generative AI and automation into workflows." },
      { name: "Data Analyst", desc: "Transforming raw data into strategic business intelligence." },
    ]
  },
  {
    title: "Cloud / DevOps",
    icon: <Cloud className="text-[#00B4D8]" size={28} />,
    roles: [
      { name: "Cloud Engineer", desc: "AWS, Azure, and GCP architecture and migration." },
      { name: "DevOps Engineer", desc: "CI/CD pipelines, automation, and infrastructure as code." },
      { name: "Site Reliability Engineer", desc: "Ensuring maximum uptime, performance, and scalability." },
    ]
  },
  {
    title: "Cybersecurity",
    icon: <ShieldCheck className="text-[#00B4D8]" size={28} />,
    roles: [
      { name: "Cybersecurity Analyst", desc: "Threat monitoring, risk assessment, and mitigation." },
      { name: "Ethical Hacker", desc: "Penetration testing and vulnerability management." },
    ]
  },
  {
    title: "SAP / Oracle",
    icon: <Database className="text-[#00B4D8]" size={28} />,
    roles: [
      { name: "SAP Consultant", desc: "Enterprise resource planning implementation and strategy." },
      { name: "SAP ABAP Developer", desc: "Custom business application programming for SAP environments." },
      { name: "Oracle DBA", desc: "High-performance database administration and tuning." },
      { name: "Oracle Developer", desc: "PL/SQL development and enterprise data solutions." },
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm mb-3">Core Expertise</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Specialized Technology Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            We provide top-tier talent and consulting services across the most critical domains in modern enterprise technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-[#02529B]/10 flex items-center justify-center mb-6 group-hover:bg-[#02529B] group-hover:text-white transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-6">{category.title}</h3>
              
              <ul className="space-y-5">
                {category.roles.map((role, idx) => (
                  <li key={idx}>
                    <h4 className="font-semibold text-[#02529B] text-sm mb-1">{role.name}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{role.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
