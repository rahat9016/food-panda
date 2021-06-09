import React, { useState } from 'react';
import fried from '../images/fried-chicken.png'
import roti from '../images/roti-canai.png'
import sandwich from '../images/sandwich_PNG65.png'
import soup from '../images/soup.png'
import foodsData from '../fakedata.json'
const Content = () => {
    const [foods] = useState(foodsData)
    return (
        <div>
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
        <div>
            <div>
                <h1 className="lg:text-7xl md:text-7xl sm:text-5xl text-3xl font-black block mt-7">Foods</h1>
            </div>
            <div className="md:row md:grid gap-4 md:grid-cols-2 lg:grid-cols-3  container m-auto flex-col ">
                {
                    foods.map(food => 

                    <div className="text-center p-16 shadow rounded sm:mb-10 gap-x-8 gap-y-8">
                        <img src={food.image}  className="w-32 md:w-44 lg:w-56 m-auto"/>
                        <h2 className="text-center	lg:text-3xl md:text-3xl sm:text-xl text-xl mt-5">{food.title}</h2>
                        <p>{food.description}</p>
                        <div className="flex justify-between items-center">
                            <h4 className="font-bold text-yellow-400">${food.price}</h4>
                            <button className="mt-4 py-4 px-10 bg-yellow-500 inline-block rounded-full	text-lg hover:bg-yellow-300 transition duration-300 pb-3">Add to cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default Content;