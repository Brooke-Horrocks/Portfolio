import React from "react";

import SpaIcon from "@material-ui/icons/Spa";

import image1 from "../assets/img/xander-keegan-me.jpg";

function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="hr-theme-slash-2">
                <div className="hr-line"></div>
                <div className="hr-icon"><SpaIcon fontSize="small"/></div>
                <div className="hr-line"></div>
            </div>
            <h4>Full Stack Developer and Computer Science student based out of Salt Lake City, Utah</h4>
            <p>Before jumping into web development, I spent three years in relay communication for the deaf and hard of hearing, and six years in mortgage servicing. What I loved most in both fields was technology and decided to change my major to Computer Science. My very first CS classes were learning Java and I fell in love with coding instantly. I couldn't get enough and wanted to be fully immersed in the tech world. I chose to attend V School, where I recently graduated, learning the MERN (MongoDB, Express, React, Node) stack so I could make the leap into the career I'd been dreaming of. I'm currently looking for a place where I can make meaningful contributions and continue learning.</p>
            <p style={{textAlign: "center"}}>When I'm not coding, you can find me curled up with a book or playing sports and video games with my partner and son.</p>
            <div className="about-image-container">
                <img className="about-image" src={image1} alt=""></img>
            </div>
        </div>
    )
}

export default About;