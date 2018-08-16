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
      <div>
        {this.props.items.map(items => {
          return(
              <div key={items.id}>
                <Link to={`/items/${items.id}`}><h1>{items.name}</h1></Link>
                <p><b>{items.price}</b></p>
                <img src={`${items.image_url}`} style={{width:'250px',height:'250px'}}/>
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
