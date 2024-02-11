import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faStar } from '@fortawesome/free-solid-svg-icons';
 import style from './About.module.css'
export default function About() {
  return (
    <>
    <div className="text-center my-5">
    <h2 className=" py-2  fw-bolder text-light">ABOUT COMPONENT</h2>
      <FontAwesomeIcon icon={faStar}  className='text-light'/>
      <div className="text-start m-auto d-flex justify-content-around w-75  ">
      <p className={`${style.text} w-50 text-light`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className={`${style.text} w-50 text-light`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
      
    </>
  );
}
