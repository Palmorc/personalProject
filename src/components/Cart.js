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
  return total
}

render(){
  console.log(this.props.cart)

  return(
    <div>
      {this.props.cart
        ?
      this.props.cart.map(item => {
        return(
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <button onClick={()=>this.props.removeItem()}>Remove</button>
          </div>
        )
      })
      :
      null}
      <div>Total:{this.totaling()} </div>
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
