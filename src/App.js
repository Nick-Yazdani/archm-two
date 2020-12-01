import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utilities/ScrollToTop';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import OurBrands from './pages/OurBrands/OurBrands';
import OurBusinesses from './pages/OurBusinesses/OurBusinesses';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/our-brands" component={OurBrands} />
          <Route path="/our-businesses" component={OurBusinesses} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
