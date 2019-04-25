import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Products from './components/Products'
import productSingle from './components/productSingle'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Products" component={Products} />
          <Route path="/product/:slug" component={productSingle} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
