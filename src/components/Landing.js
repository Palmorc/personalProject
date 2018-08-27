import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getItems} from '../redux/reducers/user'

class Items extends Component{
  componentDidMount(){
    this.props.getItems()
  }

  render(){
    return(
      <div className= 'landing'>
        {this.props.items.map(items => {
          return(
              <div key={items.id} className = 'items'>
                <Link to={`/items/${items.id}`}><h1 className = 'itemName'>{items.name}</h1></Link>
                <p className = 'itemPrice'><b>${items.price}</b></p>
                <Link to={`/items/${items.id}`}><img className = 'itemImage' src={`${items.image_url}`} style={{width:'250px',height:'250px'}}/></Link>
              </div>
          )
        })}
      </div>
    )
  }
}
let mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, {getItems})(Items)
