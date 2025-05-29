import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:1.5fr_1fr_1fr_1fr] gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-5">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-[#6E59A5]">Ingenix</span>
                <span className="text-2xl font-medium ml-1 text-white">Innovations</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering enterprises with cutting-edge AI solutions to solve real-world challenges.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">AI Consulting</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Voice AI</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Multi-Agent Systems</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Generative AI</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Predictive Analytics</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@ingenixinnovations.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 (123) 456-7890</span>
              </li>
              <li className="text-gray-400">
                123 Tech Park, IT Corridor,<br />
                Bangalore, Karnataka 560100,<br />
                India
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ingenix Innovations. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;