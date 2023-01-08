import { useState } from "react";
import "./header.css";
import { ReactComponent as Logo } from "./assets/logo_sm.svg";

export default function Header() {
  return (
    <header>
      <div className='flex'>
        <Logo className='logo' />
        <div className='light-toggler-container'>
          <input type='checkbox' id='check' />
          <label htmlFor='check'></label>
        </div>
      </div>
      <div className='title'>
        <h1>LULSEGED ADMASU</h1>
        <h3>
          Front-End Developer <span className='dot'></span> UI/UX Designer
        </h3>
      </div>
      <div className='address flex'>
        <span>
          <i className='fa-solid fa-location-dot'></i> USA
        </span>
        <span>
          <i className='fa-solid fa-envelope'></i>lulsegedwork@gmail.com
        </span>
      </div>
      <div className='socials flex'>
        <span className='portfolio'>
          <a
            target='_blank'
            href='https://lulseged-admasu-final.netlify.app/'
          ></a>
          <i className='fa-solid fa-globe'></i>/lul-g
        </span>
        <span className='github'>
          <i className='fa-brands fa-github-alt'></i>/lul-g
          <a target='_blank' href='https://github.com/lul-g'></a>
        </span>
        <span className='linkedin'>
          <i className='fa-brands fa-linkedin'></i>/lul-g
          <a
            target='_blank'
            href='https://www.linkedin.com/in/lulseged-admasu/'
          ></a>
        </span>
        <span className='twitter'>
          <i className='fa-brands fa-twitter'></i>/lul-g
          <a target='_blank' href='https://twitter.com/lulseged_admasu'></a>
        </span>
      </div>
    </header>
  );
}
