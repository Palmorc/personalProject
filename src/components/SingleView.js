import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getOne, createOrder, addItem} from '../redux/reducers/user'


class SingleView extends Component{
  componentDidMount(){
    this.props.getOne(this.props.match.params.id);
  }



  render(){

    return(
      <div className='bigBoi'>
        {this.props.items.map(item => {
          return(
            <div key={item.id} className='singleItem'>
            <div className='singleItemNameDiv'>
              <h1>{item.name}</h1>
              <p className='singleItemPrice'><b>${item.price}</b></p>
              <p className='itemDesc'>{item.description}</p>
              <button className='addToCart' onClick={() => this.props.addItem(item)}>Add to Cart</button>
             </div>
             <img className='singleItemImage'src={`${item.image_url}`} />

            </div>
          )
        })}
      </div>
    )
  }
}
let mapStateToProps = (state, props) => {
  return {
    items: state.items,
    userData: state.userData
  }
}

export default connect(mapStateToProps,{getOne, createOrder, addItem})(SingleView)
