import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utilities/ScrollToTop';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

const App = () => {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
