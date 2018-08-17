import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Navbar extends Component{

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
    if(this.props.cart.length===0){
      return 'Empty'
    } else {
      return '+' + this.props.cart.length
    }
  }

  render(){
    return(
      <div className='navbar'>
        <Link to='/'><img src = 'http://www.ccorpusa.com/wp-content/uploads/2017/07/logo.png'  style={{width:'100px',height:'100px'}}/></Link>
        <div className ='buttons' >
          <button onClick={this.login} className='loginButton'>Login</button>
          <Link to='/cart'><button className='cartButton'>Cart</button></Link><p>{this.cartCounter()}</p>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    user:state.data,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Navbar)
