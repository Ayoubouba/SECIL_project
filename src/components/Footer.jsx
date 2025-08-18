import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-600 text-gray-300 pt-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Column 1: Company Info */}
                    <div>
                        <img src="https://cimentsdegabes.com.tn/wp-content/uploads/2023/10/logo.png" alt="logo" className="rounded-2xl w-20 h-20"/>
                        <h2 className="text-white font-bold text-lg mb-4">SECIL</h2>
                        <p className="text-sm">
                            Société des Ciments de Gabès is a public limited company founded in 1973 and specializing in the manufacture of binders (cement and artificial lime). Its Gabès plant went into production in 1977.  Its main market covers the whole of southern Tunisia.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">FAQs</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">123 Business Street, City, Country</p>
                        <p className="text-sm mt-2">Email: support@yourcompany.com</p>
                        <p className="text-sm">Phone: +1 (555) 123-4567</p>

                        {/* Social icons */}
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
                    © {new Date().getFullYear()} YourCompany. All rights reserved.
                </div>
            </footer>
        </>
        )
}
export default Footer
