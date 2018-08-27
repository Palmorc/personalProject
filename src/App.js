import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderStatus from './components/OrderStatus'
import SingleView from './components/SingleView'
import Footer from './components/Footer'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser, getCart} from './redux/reducers/user'
import './stylesheets/App.css';



class App extends Component {
  componentDidMount(){
    this.props.getUser()
    this.props.getCart()
  }
  render() {
    return (
      <div className="App">
      <HashRouter>
        <div>
        <Navbar style={{position: 'fixed'}}/>
        <Switch>
          <Route exact path = '/' component={Landing}/>
          <Route path = '/cart' component={Cart}/>
          <Route path = '/checkout' component={Checkout}/>
          <Route path = '/orderstatus' component={OrderStatus}/>
          <Route path = '/items/:id' component={SingleView}/>
        </Switch>
        </div>
        </HashRouter>
        <Footer/>
      </div>
    );
  }
}

export default connect(null, {getUser, getCart})(App);
