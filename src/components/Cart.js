import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createOrder, addItem, getCart, removeItem, plusItem, minusItem } from '../redux/reducers/user'

class Cart extends Component{

componentDidMount(){
  this.props.getCart()
}



totaling = () => {
  let total = 0
  console.log(2222222222, this.props.cart)
  this.props.cart.forEach(function(item){
      let itemTotal = item.price*item.quantity
      total += itemTotal
  })
  total = Math.floor(total * 100) / 100
  if (total != 0){
    return 'Total:' + ' $' + total
  } else {
    null
  }
}


render(){
  return(
    <div className = 'cart'>
      {this.props.cart.length
        ?
      this.props.cart.map(item => {
        return(
          <div key={item.id} className = 'cartItem'>
            <h1 className = 'cartItemName'>{item.name}</h1><p className = 'cartItemQuantity'>x {item.quantity}</p>
            <img className = 'cartItemImage' src={item.image_url}  style={{width:'50px',height:'50px'}}/>
            <p className = 'cartItemPrice'>${item.price}</p>
            <button className = 'plusQuantity' onClick={() => this.props.plusItem(item)}>+</button>
            <button className = 'subtractQuantity' onClick={() => this.props.minusItem(item)}>-</button>
            <button className = 'cartRemoveItem' onClick={()=>this.props.removeItem(item)}>Remove</button>
          </div>
        )
      })
      :
      <h1>Your Cart is Empty</h1>}
      <div className='total'>{this.totaling()} </div>
    </div>
  )
}
}

let mapStateToProps = (state, props) => {
return{
  items:state.items,
  cart: state.cart}
}

export default connect(mapStateToProps,{addItem, createOrder, getCart, removeItem, plusItem, minusItem})(Cart)
