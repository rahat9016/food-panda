import React from 'react';
import fried from '../images/fried-chicken.png'
import roti from '../images/roti-canai.png'
import sandwich from '../images/sandwich_PNG65.png'
import soup from '../images/soup.png'
const Content = () => {
    return (
        <div className="bg-green-200">
            <div className="row flex container m-auto justify-between px-5 py-3 rounded items-center">
                <div className="text-center	lg:text-3xl md:text-3xl sm:text-xl text-xl">
                    <img src={fried} className="w-16 md:w-32 lg:w-48" alt="" />
                    <h3 className="mt-4">Fried Chicken</h3>
                </div>
                <div className="text-center	lg:text-3xl md:text-3xl sm:text-xl text-xl">
                    <img src={roti} className="w-16 md:w-32 lg:w-48" alt="" />
                    <h3 className="mt-4">Roti Canai</h3>
                </div>
                <div className="text-center	lg:text-3xl md:text-3xl sm:text-xl text-xl">
                    <img src={sandwich}  className="w-16 md:w-32 lg:w-48" alt="" />
                    <h3 className="mt-4">Roti</h3>
                </div>
                <div className="text-center	lg:text-3xl md:text-3xl sm:text-xl text-xl">
                    <img src={soup} className="w-16 md:w-32 lg:w-48"  alt="" />
                    <h3 className="mt-4">Soup</h3>
                </div>
            </div>
        </div>
    );
};

export default Content;