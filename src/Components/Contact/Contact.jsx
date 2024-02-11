import React from "react";
import style from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className={`${style.body} text-center py-3 `}>
      <h1 className={`${style.fontColor} fw-bold`}>CONATCT SECTION</h1>
      <FontAwesomeIcon icon={faStar} className={`${style.fontColor}`} />
      <div className="m-auto w-50 py-5">
        <input
          className="w-100 rounded  border border-0 border-bottom"
          type="text"
          placeholder="UserName"
        ></input>
        <input
          className="my-5 w-100 rounded border border-0  border-bottom"
          type="number"
          placeholder="UserAge"
        ></input>
        <input
          className=" w-100 rounded border border-0  border-bottom"
          type="email"
          placeholder="UserEmail"
        ></input>
        <input
          className="my-5 w-100 rounded border border-0  border-bottom"
          type="password"
          placeholder="UserPassword"
        ></input>
        <button className=" p-2 border border-0 rounded bg-success text-light"> Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
