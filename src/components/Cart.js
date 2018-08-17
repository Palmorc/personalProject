import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createOrder, addItem, getCart, removeItem } from '../redux/reducers/user'

class Cart extends Component{

componentDidMount(){
  this.props.getCart()
}



totaling = () => {
  if(this.props.cart.length = 0){
    return 'Your cart is empty'
  } else {
  let total = 0
  this.props.cart.forEach(function(item){
      let itemTotal = item.price*item.quantity
      total += itemTotal
  })
  total = Math.floor(total * 100) / 100
}}

render(){
  console.log(this.props.cart)

  return(
    <div>
      {this.props.cart != []
        ?
      this.props.cart.map(item => {
        return(
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image_url}  style={{width:'50px',height:'50px'}}/>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={()=>this.props.removeItem(item)}>Remove</button>
          </div>
        )
      })
      :
      null}
      <div>{this.totaling()} </div>
    </div>
  )
}
}

let mapStateToProps = (state, props) => {
return{
  items:state.items,
  cart: state.cart}
}

export default connect(mapStateToProps,{addItem, createOrder, getCart, removeItem})(Cart)
