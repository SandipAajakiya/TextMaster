import React from 'react';
import P from './P.jpg'
import './style.css';
import Typewriter from "./Typewriter";
import {FaTwitter, FaWhatsapp, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';


export default function About(props) {
 
   const iconSize = 30; // Adjust the size as needed
   

  return (
    <div className="container w-75 justify-content-center mt-5 ">
      <div className="card">
        <div className="card-header text-center" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <h1> Hello! </h1>

          <h5> I'm a{' '} <Typewriter words={['creative React Developerr', 'creative WebDeveloperr']} delay={150} /></h5>

        </div>
        <div className="card-body" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <div className="row">

          <div className="col">
          <img src={P} alt='MyPhoto' className="circular-image mx-auto d-block"/>
          <h5 className="card-text text-center">About Me:</h5>
          <h6 className="card-title">I'm diving headfirst into the world of web development, with a focus on React. As a beginner, I'm eager to learn and grow, fueled by a passion for creating interactive and engaging user experiences. Join me on this exciting journey as I explore the endless possibilities of web development with React</h6>
          </div>

          <div className="col" >
          <h3 className="card-title">Details:</h3>
          <h5 className="card-text">Name:</h5>
          <h6 className="card-title">Sandip Ajakiya</h6>
          <h5 className="card-text">Age:</h5>
          <h6 className="card-title">21 Years</h6>
          <h5 className="card-text">Location:</h5>
          <h6 className="card-title">Rajkor-Gujarat</h6>
          <h5 className="card-text">Gmail:</h5>
          <h6 className="card-title">sandip.ajakiya333@gmail.com</h6>

        </div></div></div>
        
        <div className="card-footer text-muted text-center" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
          <a href="https://twitter.com/Sandip_Ajakiya" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px' }}>
            <FaTwitter size={iconSize} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=9016402617&text=Hello!!" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px' }}>
            <FaWhatsapp size={iconSize} />
          </a>
          <a href="https://www.instagram.com/sandip_ajakiya/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px' }}>
            <FaInstagram size={iconSize} />
          </a>
          <a href="https://www.facebook.com/sandeep.ajakiya" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px' }}>
            <FaFacebook size={iconSize} />
          </a>
          <a href="https://github.com/SandipAajakiya" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', marginRight: '10px' }}>
            <FaGithub size={iconSize} />
          </a>
        </div>
      </div>
      <div className='text-center my-3'>Thank You For Visit ...</div>
    </div>
  );
}

