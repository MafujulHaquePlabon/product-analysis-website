import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='mt-5 '>
               <Link className='mr-5 hovar font-semibold' to="/home">HOME</Link>
               <Link className='mr-5 hovar font-semibold' to="/reviews">REVIEWS</Link>
               <Link className='mr-5 hovar font-semibold' to="/dashboard">DASHBOARD</Link>
               <Link className='mr-5 hovar font-semibold' to="/blogs">BLOGS</Link>
               <Link className='mr-5 hovar font-semibold' to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;