import React from "react";
import {Link} from "react-router-dom";

function navBar() {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
        role='navigation'>
            <Link to= '/' className="pl-8">Hard Knox Physiotherapy</Link>
            <div className="pr-8 md:block hidden">
                <Link to='/' className="p-4">Home</Link>
                <Link to='/pricing' className="p-4">Pricing</Link>
                <Link to='/booking' className="p-4">Book</Link>
            </div>
        </nav>
    );
}

export default navBar;

