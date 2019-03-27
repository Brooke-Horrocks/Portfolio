import React from "react";

import SpaIcon from "@material-ui/icons/Spa";

import resumePdf from "../assets/img/brooke-resume.png";

function Resume() {
    return (
        <div className="resume-container">
            <h1>Resumé</h1>
            <div className="hr-theme-slash-2">
                <div className="hr-line"></div>
                <div className="hr-icon"><SpaIcon fontSize="small"/></div>
                <div className="hr-line"></div>
            </div>
            <h4>Feel free to reach out to me with any questions</h4>
            <div className="resume-buttons-container">
                <a className="button-links" href={resumePdf} download>Download Resumé</a>
                <a className="button-links" href="mailto:brooke.horrocks7@gmail.com?subject=Regarding Your Resumé/References">Ask for References</a>
            </div>
            <div className="resume-img-container">
                <img className="resume-img" src={resumePdf} alt=""/>
            </div>
        </div>
    )
}

export default Resume;