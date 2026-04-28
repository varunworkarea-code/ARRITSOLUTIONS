import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
          <div className="bg-white p-2 rounded-md mb-6 w-48">
            <div className="relative w-full h-10">
              <Image
                src="/assets/images/logo.png"
                alt="ARR IT SOLUTIONS INC"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your Partner in Smart IT Solutions. Providing enterprise-grade IT staffing and technology consulting for growing businesses.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li><Link href="#home" className="hover:text-primary-light transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-primary-light transition-colors">About Us</Link></li>
            <li><Link href="#services" className="hover:text-primary-light transition-colors">Our Services</Link></li>
            <li><Link href="#process" className="hover:text-primary-light transition-colors">Our Process</Link></li>
            <li><Link href="#careers" className="hover:text-primary-light transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Expertise</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li><Link href="#services" className="hover:text-primary-light transition-colors">Software Development</Link></li>
            <li><Link href="#services" className="hover:text-primary-light transition-colors">AI & Data Science</Link></li>
            <li><Link href="#services" className="hover:text-primary-light transition-colors">Cloud & DevOps</Link></li>
            <li><Link href="#services" className="hover:text-primary-light transition-colors">Cybersecurity</Link></li>
            <li><Link href="#services" className="hover:text-primary-light transition-colors">SAP & Oracle</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <address className="not-italic flex flex-col gap-3 text-sm text-gray-400">
            <p>100 Chesterfield Business Parkway,<br />Suite 200, Chesterfield, MO 63005</p>
            <p className="mt-2"><a href="mailto:info@arritsolutions.com" className="hover:text-primary-light transition-colors">info@arritsolutions.com</a></p>
            <p><a href="tel:+13146750701" className="hover:text-primary-light transition-colors">+1 314-675-0701</a></p>
          </address>
        </div>
      </div>

      <div className="container pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} ARR IT SOLUTIONS INC. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
