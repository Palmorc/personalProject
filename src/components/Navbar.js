import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { getUser } from '../redux/reducers/user'

class Navbar extends Component{

  componentDidMount(){
    this.props.getUser()
  }

  login = () => {
    let auth0Domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    // console.log(process.env)
    let location = `${auth0Domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
    // console.log(location)
    window.location = location

  }


  cartCounter = () => {
      return '+' + Number(this.props.cart.length)
    }

  checkLogin = (props) => {
    return(this.props.user ? 'LOGOUT' : 'LOGIN')
  }



  render(){
    return(
      <div className='navbar'>
        <Link to='/'><img src = {require('../images/logo.png')}  className='logo'/></Link>
        <div className ='buttons' >
          <button onClick={this.login} className='loginButton'>{this.checkLogin(this.props.user)}</button>
          <Link to='/cart'><button className='cartButton'>CART</button></Link>
        </div>
        <Link to='/'><div className='name'><p><i><b>NORD</b></i></p></div></Link>
        <div className='cartCounter'>
          <p className='cartnum'>{this.cartCounter()}</p>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    user: state.userData,
    cart: state.cart
  }
}

export default connect(mapStateToProps, {getUser})(Navbar)
