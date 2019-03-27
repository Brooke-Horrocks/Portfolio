import React from "react";

import SpaIcon from "@material-ui/icons/Spa";

import buffyAngelGif from "../assets/img/buffy-angel.gif";
import bookItGif from "../assets/img/book-it.gif";
import choreNinjaGif from "../assets/img/chore-ninja.gif";

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
                <h3>Buffy-Angelverse</h3>
                <h5>MVP: 10 days --- Status: Complete</h5>
                <a className="project-link" target="_blank" href="http://buffy-angel.surge.sh" rel="noopener noreferrer">See it here</a>
            </section>
            <div className="hr-theme-slash-2">
                <div className="hr-line"></div>
                <div className="hr-icon"><SpaIcon fontSize="small"/></div>
                <div className="hr-line"></div>
            </div>
            <section className="project-section">
                <img className="project-gif" src={bookItGif} alt=""/>
                <h3>Book It</h3>
                <h5>MVP: 10 days --- Status: Complete</h5>
                <a className="project-link" target="_blank" href="http://bookitbooks.herokuapp.com/" rel="noopener noreferrer">See it here</a>
            </section>
            <div className="hr-theme-slash-2">
                <div className="hr-line"></div>
                <div className="hr-icon"><SpaIcon fontSize="small"/></div>
                <div className="hr-line"></div>
            </div>
            <section className="project-section">
                <img className="project-gif" src={choreNinjaGif} alt=""/>
                <h3>Chore Ninja</h3>
                <h5>MVP: 10 days --- Status: In Progress</h5>
                <a className="project-link" target="_blank" href="https://github.com/ashgallo/chore-ninja" rel="noopener noreferrer">See it on github here</a>
            </section>
        </div>
    )
}

export default Projects;