import React from 'react';

import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';

function MainContainer() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/resumé" component={Resume} />
    </Switch>
  );
}

export default MainContainer;
