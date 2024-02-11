import React from "react";
import style from "./Portfolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img1  from "../../Assets/Images/poert1.png";
import img2  from "../../Assets/Images/port2.png";
import img3  from "../../Assets/Images/port3.png";
export default function Portfolio() {
  return (
    <div className={`${style.body} text-center py-3 `}>
      <div>
        <h1 className={`${style.fontColor} fw-bold`}> PORTFOLIO COMPONENT</h1>
        <FontAwesomeIcon icon={faStar} className={`${style.fontColor}`} />
      </div>
      <div className="margin-auto">
        <img src={img1} className="w-25 m-4 rounded" alt="img1"/>
        <img src={img2} className="w-25 m-4 rounded" alt="img2"/>
        <img src={img3} className="w-25 m-4 rounded" alt="img3"/>
        <img src={img1} className="w-25 m-4 rounded"  alt="img4"/>
        <img src={img2} className="w-25 m-4 rounded"alt="img5"/>
        <img src={img3} className="w-25 m-4 rounded" alt="img6"/>
      </div>
    </div>
  );
}
