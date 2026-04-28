import React from 'react';
import { MonitorSmartphone, Cloud, Database, ShieldCheck, Cpu, Code } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <Code size={32} />,
      title: "Custom Software Development",
      description: "Tailored applications built with modern technologies to solve your unique business challenges."
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud architecture, migration, and management services."
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Web & Mobile Apps",
      description: "Engaging, responsive, and high-performance digital experiences across all platforms."
    },
    {
      icon: <Database size={32} />,
      title: "Data Analytics",
      description: "Unlock actionable insights from your data to drive informed business decisions."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Cybersecurity",
      description: "Robust security measures to protect your infrastructure and sensitive information."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Machine Learning",
      description: "Integrate intelligent automation and predictive models to stay ahead of the curve."
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-header animate-fade-up">
          <h2>Our <span className="text-gradient">Services</span></h2>
          <p>Comprehensive technology solutions designed to empower your business.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`service-card glass animate-fade-up delay-${(index % 3 + 1) * 100}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
