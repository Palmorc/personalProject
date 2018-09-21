import axios from 'axios'

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

const GET_ITEMS = 'GET_ITEMS'
const GET_ITEMS_FULFILLED = 'GET_ITEMS_FULFILLED'

const GET_ONE = 'GET_ONE'
const GET_ONE_FULFILLED = 'GET_ONE_FULFILLED'

const CREATE_ORDER = 'CREATE_ORDER'
const CREATE_ORDER_FULFILLED = 'CREATE_ORDER_FULFILLED'

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

const ADD_ITEM = 'ADD_ITEM'
const ADD_ITEM_FULFILLED = 'ADD_ITEM_FULFILLED'

const DELETE_ITEM = 'DELETE_ITEM'
const DELETE_ITEM_FULFILLED = 'DELETE_ITEM_FULFILLED'

const GET_CART = 'GET_CART'
const GET_CART_FULFILLED = 'GET_CART_FULFILLED'

const PLUS_ITEM = "PLUS_ITEM"
const PLUS_ITEM_FULFILLED = "PLUS_ITEM_FULFILLED"

const MINUS_ITEM = "MINUS_ITEM"
const MINUS_ITEM_FULFILLED = "MINUS_ITEM_FULFILLED"









let initialState = {
  userData: null,
  items:[],
  cart: [],
  order:[]
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case GET_USER_FULFILLED:
      return {...state, userData: action.payload.data}
    case LOGOUT_USER_FULFILLED:
      return {...state, userData:null}
    case GET_ITEMS_FULFILLED:
      return{...state, items: action.payload.data}
    case GET_ONE_FULFILLED:
      return{...state, items: action.payload.data}
    case CREATE_ORDER_FULFILLED:
      return{...state, order: action.payload.data}
    case ADD_ITEM_FULFILLED:
      return{...state, cart: action.payload.data}
    case DELETE_ITEM_FULFILLED:
      return{...state, cart: action.payload.data}
    case GET_CART_FULFILLED:
      return{...state, cart:action.payload.data}
    case PLUS_ITEM_FULFILLED:
      return{...state, cart:action.payload.data}
    case MINUS_ITEM_FULFILLED:
      return{...state, cart:action.payload.data}
    default:
      return state
  }
}

export function getUser(){
  return {
    type:GET_USER,
    payload: axios.get('/api/currentuser')
  }
}

export function logout(){
  return{
  type: LOGOUT_USER,
  payload: axios.get('/api/logout')
  }
}

export function getItems(){
  return{
    type: GET_ITEMS,
    payload: axios.get('/api/items')
  }
}

export function getOne(id){
  return{
    type: GET_ONE,
    payload: axios.get(`/api/items/${id}`)
  }
}

export function createOrder(user_id){
  return{
    type: CREATE_ORDER,
    payload: axios.post('/api/orders')
  }
}

export function addItem(item){
  return{
    type: ADD_ITEM,
    payload: axios.post(`/api/cart`,item)
  }
}

export function removeItem(id){
  return{
    type: DELETE_ITEM,
    payload: axios.delete(`/api/cart/${id}`)
  }
}

export function getCart(){
  return{
    type: GET_CART,
    payload: axios.get('/api/cart')
  }
}

export function plusItem(item){
  return{
    type: PLUS_ITEM,
    payload: axios.put('/api/cart/add', item)
  }
}

export function minusItem(item){
  return{
    type: MINUS_ITEM,
    payload: axios.put('/api/cart/remove', item)
  }
}
