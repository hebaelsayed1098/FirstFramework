import React from 'react';
import style from './Home.module.css'
import img from '../../Assets/Images/avataaars.svg'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faStar } from '@fortawesome/free-solid-svg-icons';
export default  function Home() {

    return <>
    <div className='text-center w-100'>
    <img src={img} alt='Personal' className='w-25'/>
    <h2 className={`text-light fw-bold py-3`}>START FRAMEWORK</h2>
    <span className={`${style.line}`}></span>
    <FontAwesomeIcon icon={faStar}  className='text-light'/>
    <p className='text-light py-2 fs-6'>Graphic Artist - Web Designer - Illustrator</p>
    </div> 
    </>
}

