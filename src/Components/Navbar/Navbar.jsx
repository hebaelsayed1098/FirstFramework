import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <>
  <div className=" bg py-3 d-flex justify-content-between align-items-center">
     <div className="px-5">
     <h2 className="m-0 text-light">
        <Link to={'/'} className="text-light text-decoration-none">
          FIRSTFRAMEWORK
        </Link>
      </h2>
     </div>
     <div className="px-5">
    <ul className="nav">
    
        <li className="nav-item">
            <Link onClick={() => handleLinkClick('about')} 
            className={activeLink === 'about' ? 'bg-success rounded nav-link text-light fw-bold' : 'nav-link text-light fw-bold'} to={'About'}>
                ABOUT
            </Link>
        </li>
        <li className="nav-item">
            <Link onClick={() => handleLinkClick('portofolio')} 
            className={activeLink === 'portofolio' ? 'bg-success rounded nav-link text-light fw-bold' : 'nav-link text-light fw-bold'} 
            to={'portofolio'}>
                PORTFOLIO
            </Link>
        </li>
        <li className="nav-item">
            <Link onClick={() => handleLinkClick('contact')} 
              className={activeLink === 'contact' ? 'bg-success rounded nav-link text-light fw-bold' : 'nav-link text-light fw-bold'} 
      
            to={'contact'}>
                CONTACT
            </Link>
        </li>
    </ul>
    </div>
</div>

    </>
  );
}
