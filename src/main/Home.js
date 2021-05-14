import React from 'react';

import { Link } from 'react-router-dom';
import SpaIcon from '@material-ui/icons/Spa';

function Home() {
  return (
    <div className="home-container">
      <h1>Brooke Horrocks</h1>

      <div className="hr-theme-slash-2">
        <div className="hr-line"></div>
        <div className="hr-icon">
          <SpaIcon fontSize="large" />
        </div>
        <div className="hr-line"></div>
      </div>

      <h3>Full Stack Developer</h3>

      <Link className="button-links" id="see-projects-button" to="/projects">
        See My Projects
      </Link>
    </div>
  );
}

export default Home;
