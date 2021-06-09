import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <Link to="/" className="pl-8">Food Panda</Link>
            <div className="px-4 cursor-pointer md:hidden">
                <i class="fas fa-bars"></i>
            </div>
            <div className="pr-8 md:block hidden">
               <Link className="p-4" to="/">Home</Link> 
               <Link className="p-4" to="/menu">Menu</Link> 
               <Link className="p-4" to="/about">About</Link> 
               <Link className="p-4" to="/contact">Contact</Link> 
            </div>
        </nav>
    );
};

export default Navbar;