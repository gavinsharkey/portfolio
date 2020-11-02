import React from 'react';
import Reveal from 'react-reveal/Reveal'
import withReveal from 'react-reveal/withReveal'
import { Route, Switch } from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const pages = [Home, About, Projects, Contact]
const [HomeWithReveal, AboutWithReveal, ProjectsWithReveal, ContactWithReveal] = pages.map(Page => withReveal(Page, <Reveal effect='animate__fadeIn' effectOut="animate__fadeOut" />))

function App() {
  return (
    <div>
      <Navbar />
      <div className="main m-3 m-lg-5 mb-3">
        <Switch>
          <Route exact path="/">
            <HomeWithReveal />
          </Route>
          <Route path="/about">
            <AboutWithReveal />
          </Route>
          <Route path="/projects">
            <ProjectsWithReveal />
          </Route>
          <Route path="/contact">
            <ContactWithReveal />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
