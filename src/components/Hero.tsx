import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge glass animate-fade-up">
            <span className="badge-dot"></span>
            Innovating the Future
          </div>
          
          <h1 className="hero-title animate-fade-up delay-100">
            Transform Your Vision Into <br/>
            <span className="text-gradient">Digital Reality</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-up delay-200">
            Arrit Solutions delivers cutting-edge software and IT consulting services. 
            We build scalable, high-performance applications designed to accelerate your business growth.
          </p>
          
          <div className="hero-actions animate-fade-up delay-300">
            <a href="#services" className="btn btn-primary">
              Our Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
