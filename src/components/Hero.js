import React from 'react';
import { Link } from 'react-router-dom';
import sandwich from '../images/sandwich_PNG65.png'
const Hero = () => {
    return (
        <div className="md:flex-row sm:flex-col items-center py-3 px-4 md:flex lg:flex bg-gray-100 ">
            <div className="sm:w-full md:w-1/2 lg:w-1/2">
                <h1 className="lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-black ">Veg club Sandwich</h1>
                <p>
                A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type
                </p>
            <Link className="mt-4 py-4 px-10 bg-yellow-500 inline-block rounded-full	text-lg hover:bg-yellow-300 transition duration-300 pb-3 animate-bounce">Add to cart <i class="fas fa-shopping-cart"></i></Link>
            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/2">
            <img src={sandwich} alt="" />
            </div>
            
            
        </div>
    );
};

export default Hero;