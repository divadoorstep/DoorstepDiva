import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Doorstep Diva</h3>
            <p className="text-gray-300 mb-4">
              Premium beauty and salon services delivered to your doorstep in Lucknow. 
              Experience professional beauty treatments in the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-pink-500 transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-pink-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-pink-500" />
                <span className="text-gray-300">Lucknow, Uttar Pradesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-pink-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-pink-500" />
                <span className="text-gray-300">info@doorstepdiva.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Doorstep Diva. All rights reserved. | Serving Lucknow with premium beauty solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;