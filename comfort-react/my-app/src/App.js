import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import forgotPw from './components/forgotPw'
import Products from './components/Products';
import productSingle from './components/productSingle';
import RoomSingle from './components/roomSingle';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/forgotPw" component={forgotPw} />
          <Route path="/Products" component={Products} />
          <Route path="/product/:slug" component={productSingle} />
          <Route path="/room/:name" component={RoomSingle} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
