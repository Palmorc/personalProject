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
    }else if(this.props.cart.length===1) {
      return 'One'
    }else if(this.props.cart.length===2) {
     return 'Two'
   } else if(this.props.cart.length===3) {
     return 'Three'
   } else if(this.props.cart.length===4) {
     return 'Four'
   } else if(this.props.cart.length===5) {
     return 'Five'
   } else if(this.props.cart.length===6) {
     return 'Six'
   } else if(this.props.cart.length===7) {
     return 'Seven'
   } else if(this.props.cart.length===8) {
     return 'Eight'
   } else if(this.props.cart.length===9) {
     return 'Nine'
   }else {
      return '+' + Number(this.props.cart.length)
    }
  }

  render(){
    return(
      <div className='navbar'>
        <Link to='/'><img src = {require('../images/logo.png')} style={{width:'75px',height:'auto'}} className='logo'/></Link>
        <div className ='buttons' >
          <button onClick={this.login} className='loginButton'>LOGIN</button>
          <Link to='/cart'><button className='cartButton'>CART</button></Link>
        </div>
        <Link to='/'><div className='name'><p ><i><b>NORD</b></i></p></div></Link>
        <div className='cartCounter'>
          <p className='cartnum'>{this.cartCounter()}</p>
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
