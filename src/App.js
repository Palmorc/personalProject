import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderStatus from './components/OrderStatus'
import SingleView from './components/SingleView'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from './redux/reducers/user'
import './App.css';



class App extends Component {
  componentDidMount(){
    this.props.getUser()
  }
  render() {
    return (
      <div className="App">
      <HashRouter>
        <div>
        <Navbar />
        <Switch>
          <Route exact path = '/' component={Landing}/>
          <Route path = '/cart' component={Cart}/>
          <Route path = '/checkout' component={Checkout}/>
          <Route path = '/orderstatus' component={OrderStatus}/>
          <Route path = '/items/:id' component={SingleView}/>
        </Switch>
        </div>
        </HashRouter>
      </div>
    );
  }
}

export default connect(null, {getUser})(App);
