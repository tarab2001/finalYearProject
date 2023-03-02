import React from "react";
import {useNavigate} from 'react-router-dom';
import image from './images/Physio.png';
import man from './images/man.jpeg';
import man2 from './images/man2.jpeg';
import woman from './images/Jenny.jpeg';

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="relative flex flex-col items-center justify-center">
                <img className="h-1/2 w-full" src={image} alt="person running" />
                <h1 className="absolute font-bold text-black top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-xl md:top-24 lg:text-3xl lg:top-44">We Help People Get Back To Their Physical Best</h1>
                <p className="absolute text-black font-bold top-28 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 md:text-xl md:top-48 lg:text-3xl lg:top-1/2">Book Appointment Now!</p>
                <button className= "absolute bg-indigo-400 hover:bg-indigo-700 text-white uppercase font-bold py-2 px-4 rounded-full top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2  lg:text-3xl lg:top-2/3" onClick={() => navigate('/booking')}>
                    Book Now
                </button>
            </div>

            <div className="container mx-64 px-50">
                <h1 className="text-indigo-400 font-bold text-left py-5 text-2xl">What To Expect From Your First Appointment:</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-0 lg:pb-20">
                    <div class="p-6 bg-gray-100 rounded-lg">
                        <div class="mb-5">
                            <svg className="hi-outline hi-template inline-block w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold mb-2">
                            Understand & Identify
                        </h3>         
                        <p class="text-sm leading-6 text-gray-600"> At your initial appointment, our Physiotherapist will complete a full 
                            assessment and identify your treatment goals</p>
                    </div>
                    <div class="p-6 bg-gray-100 rounded-lg">
                        <div class="mb-5">
                            <svg className="hi-outline hi-template inline-block w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold mb-2">
                            Hands On Treatment
                        </h3>         
                        <p class="text-sm leading-6 text-gray-600"> Once your Physio has identified your goals, they will start treatment 
                            immediately (hands-on where required).</p>
                    </div>
                    <div class="p-6 bg-gray-100 rounded-lg">
                        <div class="mb-5">
                            <svg className="hi-outline hi-template inline-block w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold mb-2">
                            Treatment Plan
                        </h3>         
                        <p class="text-sm leading-6 text-gray-600"> During your first assessment your physio will create a tailored 
                            treatment plan to aid your recovery.</p>
                    </div>
                </div>
                <button className= "bg-indigo-400 hover:bg-indigo-700 text-white text-left uppercase font-bold py-2 px-4 rounded-full " onClick={() => navigate('/booking')}>
                    Book Now
                </button>
            </div>

            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full h-96" src={man} alt="Man"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Mark Malone</div>
                        <p class="text-gray-700 text-base">
                            Mark is our Senior Physiotherapist. He graduated from UCD with a first class honours. His interest include 
                            soccer, kickboxing and rugby.
                        </p>
                    </div>
                </div>
                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full h-96" src={woman} alt="woman"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Jenny Smith</div>
                        <p class="text-gray-700 text-base">
                            Jenny is one of our Charted Physiotherapist. She graduated from UL with a honours degree. Her interest include 
                            soccer, GAA and hockey.
                         </p>
                    </div>
                </div>

                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full h-96" src={man2} alt="man"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Michael Breen</div>
                        <p class="text-gray-700 text-base">
                            Michael is our other Charted Physiotherapist. He graduated from RCSI with a honours degree. His interest include 
                            rugby, boxing and GAA.
                         </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;