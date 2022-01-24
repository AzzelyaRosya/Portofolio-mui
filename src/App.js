// import component

import * as React from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/portofolio-mui/" component={Banner} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
