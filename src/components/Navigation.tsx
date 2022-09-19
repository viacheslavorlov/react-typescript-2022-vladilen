import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav className="text-center text-3xl flex justify-around mb-10">
                <NavLink end className={({isActive}) => (isActive ? 'text-red-600 underline' : 'text-green-900')} to="about">About</NavLink>
                <NavLink end className={({isActive}) => (isActive ? 'text-red-600 underline' : 'text-green-900')} to="/">Products</NavLink>
            </nav>
        </div>
    );
};

export default Navigation;