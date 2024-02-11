import React from "react";
import style from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="py-4  bg text-center text-light ">
        <div className="py-4 d-flex justify-content-around">
          <div className="w-25">
            <h3 className={`${style.head}`}>LOCATION</h3>
            <p className={`${style.content}`}>2215 John Daniel Drive</p>
            <p className={`${style.content}`}>Clark, MO 65243</p>
          </div>
          <div className="w-25">
            <h3 className={`${style.head}`}>AROUND THE WEB</h3>
            <FontAwesomeIcon
              className="mx-1 text-light px-2 rounded-circle border py-2"
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="mx-1 text-light px-2 rounded-circle border py-2"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="mx-1 text-light px-2 rounded-circle border py-2"
              icon={faLinkedinIn}
            />
          </div>
          <div className="w-25">
            <h3 className={`${style.head}`}>ABOUT FREELANCER</h3>
            <p className={`${style.content}`}>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>
      <div className="py-1 d-flex justify-content-around bgfooter text-center ">
        <p className="text-light">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
