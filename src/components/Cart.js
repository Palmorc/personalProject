import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createOrder, addItem, getCart, removeItem } from '../redux/reducers/user'

class Cart extends Component{

componentDidMount(){
  this.props.getCart()
}



totaling = () => {
  let total = 0
  this.props.cart.forEach(function(item){
      let itemTotal = item.price*item.quantity
      total += itemTotal
  })
  total = Math.floor(total * 100) / 100
  if (total != 0){
    return total
  } else {
    null
  }
}

render(){
  console.log(this.props.cart)

  return(
    <div className = 'cart'>
      {this.props.cart.length != 0
        ?
      this.props.cart.map(item => {
        return(
          <div key={item.id} className = 'cartItem'>
            <h1 className = 'cartItemName'>{item.name}</h1>
            <img className = 'cartItemImage' src={item.image_url}  style={{width:'50px',height:'50px'}}/>
            <p className = 'cartItemPrice'>${item.price}</p>
            <p className = 'cartItemQuantity'>Quantity: {item.quantity}</p>
            <button className = 'cartRemoveItem' onClick={()=>this.props.removeItem(item)}>Remove</button>
          </div>
        )
      })
      :
      <h1>Your Cart is Empty</h1>}
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
