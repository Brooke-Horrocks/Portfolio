import React from 'react';

import Button from '@material-ui/core/Button';

import githubIcon from '../assets/img/github.png';
import linkedinIcon from '../assets/img/linkedin.png';
import emailIcon from '../assets/img/email.png';

function Footer() {
    return (
        <footer>
            <Button target="_blank" href="https://www.linkedin.com/in/brookehorrocks/">
                <img className="contact-icon" src={linkedinIcon} alt="" />
            </Button>
            <Button target="_blank" href="https://github.com/Brooke-Horrocks">
                <img className="contact-icon" src={githubIcon} alt="" />
            </Button>
            <Button href="mailto:brooke.horrocks7@gmail.com?subject=Regarding Your Portfolio">
                <img className="contact-icon" src={emailIcon} alt="" />
            </Button>
        </footer>
    )
}

export default Footer;