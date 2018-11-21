import React from "react";

import SpaIcon from "@material-ui/icons/Spa";

import buffyAngelGif from "../assets/img/buffy-angel.gif";
import bookItGif from "../assets/img/book-it.gif";

function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="hr-theme-slash-2">
                <div className="hr-line"></div>
                <div className="hr-icon"><SpaIcon fontSize="small"/></div>
                <div className="hr-line"></div>
            </div>
            <section className="project-section">
                <img className="project-gif" src={buffyAngelGif} alt=""/>
                <h5>Project 1</h5>
            </section>
            <div className="hr-theme-slash-2">
                <div className="hr-line"></div>
                <div className="hr-icon"><SpaIcon fontSize="small"/></div>
                <div className="hr-line"></div>
            </div>
            <section className="project-section">
                Project 2
                <img className="project-gif" src={bookItGif} alt=""/>
            </section>
            <div className="hr-theme-slash-2">
                <div className="hr-line"></div>
                <div className="hr-icon"><SpaIcon fontSize="small"/></div>
                <div className="hr-line"></div>
            </div>
            <section className="project-section">
                Project 3
            </section>
        </div>
    )
}

export default Projects;