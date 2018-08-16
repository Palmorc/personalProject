import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getOne, createOrder, addItem} from '../redux/reducers/user'


class SingleView extends Component{
  componentDidMount(){
    this.props.getOne(this.props.match.params.id);
  }



  render(){

    return(
      <div>
        {this.props.items.map(item => {
          return(
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p><b>{item.price}</b></p>
              <img src={`${item.image_url}`} style={{width:'500px',height:'500px'}}/>
              <button onClick={() => this.props.addItem(item)}>Add to Cart</button>
              <p>{item.description}</p>
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
