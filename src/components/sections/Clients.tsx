"use client";

export default function Clients() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="container text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by leading companies</p>
        
        {/* Placeholder Logo Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="text-2xl font-black text-gray-400 tracking-tighter">
              COMPANY_LOGO_{i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
