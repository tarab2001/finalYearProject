import React, {useState,setState} from "react";
import {useNavigate} from 'react-router-dom';
import image from './images/prices.jpeg';

function Pricing(){
    const navigate = useNavigate();
    return(
        <div class="flex justify-center mt-5">
            <div class="block rounded-lg shadow-lg bg-gray-100 max-w-sm text-center">
                <img class="w-full" src={image} alt="physio"/>
                <div class="py-3 px-6 border-b border-gray-300">
                    Physiotherapy Prices
                </div>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 ">Initial Physiotherapy Assesment</h5>
                    <p class="text-gray-700 text-base mb-4 border-b border-gray-300">
                        €65
                    </p>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Follow Up Physiotherapy Assesment</h5>
                    <p class="text-gray-700 text-base mb-4 border-b border-gray-300">
                        €60
                    </p>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Sports Massage</h5>
                    <p class="text-gray-700 text-base mb-4 border-b border-gray-300">
                        €50
                    </p>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Video Call Consultation</h5>
                    <p class="text-gray-700 text-base mb-4 border-b border-gray-300">
                        €40
                    </p>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Dry Needling</h5>
                    <p class="text-gray-700 text-base mb-4 border-b border-gray-300">
                        €50
                    </p>
                    <button className= "inline-block px-6 py-2.5 bg-indigo-400 hover:bg-indigo-700 text-white uppercase font-bold rounded-full" onClick={() => navigate('/booking')}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;