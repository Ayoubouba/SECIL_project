import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MapPin,
    Mail,
    Phone,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-gray-200 pt-12 overflow-hidden w-full">
            {/* Animated gradient glows */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Column 1: Company Info */}
                <div className="hover:scale-[1.02] transition-transform">
                    <img
                        src="https://cimentsdegabes.com.tn/wp-content/uploads/2023/10/logo.png"
                        alt="logo"
                        className="rounded-2xl w-20 h-20 mb-4 shadow-lg"
                    />
                    <h2 className="text-white font-bold text-xl mb-3">SECIL</h2>
                    <p className="text-sm leading-relaxed text-gray-200">
                        Société des Ciments de Gabès, founded in 1973, specializes in
                        binders (cement & lime). Serving southern Tunisia since 1977.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {["Home", "About Us", "Services", "Contact"].map((link, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="relative hover:text-white transition-colors before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-blue-400 hover:before:w-full before:transition-all before:duration-300"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Resources */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        {["Blog", "FAQs", "Help Center", "Privacy Policy"].map((link, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="relative hover:text-white transition-colors before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-purple-400 hover:before:w-full before:transition-all before:duration-300"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-blue-300" />
                        <span>123 Business Street, City, Country</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-2">
                        <Mail size={16} className="text-purple-300" />
                        <span>support@yourcompany.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-2">
                        <Phone size={16} className="text-indigo-300" />
                        <span>+1 (555) 123-4567</span>
                    </div>

                    {/* Social icons */}
                    <div className="flex space-x-4 mt-5">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-2 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                            >
                                <Icon size={18} className="text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/20 mt-12 py-5 text-center text-sm text-gray-300">
                © {new Date().getFullYear()} SECIL. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
