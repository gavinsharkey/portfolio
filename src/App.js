import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

function App() {
  return (
    <div className="main">
      <div className="container py-3 py-lg-5 mh-100">
        <div className="row justify-content-center align-items-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
