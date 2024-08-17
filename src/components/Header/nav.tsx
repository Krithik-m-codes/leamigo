"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-around py-1 px-2 bg-white">
            <div className="flex items-center space-x-4">
                <img src="/leamigo.svg" alt="logo" className=" h-20 w-40" />
            </div>
            <div className="hidden md:flex items-center space-x-4  2xl:gap-10">
                <div className="md:flex">
                    <Input
                        type="text"
                        placeholder="Search destinations or activities"
                        className="w-full md:w-96 outline-none border-none p-2 rounded-lg focus:outline md:mr-10 2xl:mr-16"
                    />
                </div>
                <div className='md:flex items-center space-x-4 md:gap-5 3xl:gap-10'>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Airport Transfers</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Deals</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Activities</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Agent Login</a>
                    <select className="bg-transparent border-none text-gray-600">
                        <option>USD</option>
                    </select>
                </div>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={
                () => setIsOpen(!isOpen)
            } >
                <Menu className="h-6 w-6" />
            </Button>

            {/* Mobile Menu */}
            <div className={
                cn("fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4", {
                    hidden: !isOpen
                })
            }  >
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Airport Transfers</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Deals</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Activities</a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Agent Login</a>
                    <select className="bg-transparent border-none text-gray-600">
                        <option>USD</option>
                    </select>
                </div>
            </div>
            <Button size="icon" className='md:hidden'
                onClick={() => setIsOpen(false)}
            >
                <X className="h-6 w-6" />
            </Button>
        </nav>
    );
};

export default Navbar;