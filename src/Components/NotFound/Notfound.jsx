import React from 'react';
import style from './NotFound.module.css';
export default function Notfound() {
    return (
    <div className={`${style.body} py-5 text-center`}>
        <h1>Page Not Found</h1>
        <h4>This page doesn’t exist.</h4>
       
    </div>
    )
}

