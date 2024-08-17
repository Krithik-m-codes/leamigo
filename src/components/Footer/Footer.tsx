// import React from 'react';
import { Instagram, Facebook, Twitter, Dribbble } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-mint_cream text-gray-700  py-12 px-4 md:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <img src="/leamigo.svg" alt="Leamigo logo" className="h-10" />
                    <p className="text-sm">
                        A3, Execube, Sector 4, Noida<br />
                        27, Old Gloucester Street, Central London<br />
                        WC1N 3AX
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">About Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Special Deals</a></li>
                        <li><a href="#" className="hover:underline">Destinations</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Community</a></li>
                        <li><a href="#" className="hover:underline">Blogs</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Work With Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Partner With Us</a></li>
                        <li><a href="#" className="hover:underline">Agent Login</a></li>
                        <li><a href="#" className="hover:underline">Join Us as Local Amigo</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-4">Follow Us On</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-900"><Instagram size={24} /></a>
                        <a href="#" className="hover:text-gray-900"><Facebook size={24} /></a>
                        <a href="#" className="hover:text-gray-900"><Twitter size={24} /></a>
                        <a href="#" className="hover:text-gray-900"><Dribbble size={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;