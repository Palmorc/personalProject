module.exports = {
  getItems: (req, res) => {
    res.send(req.session.cart || [])
  },
  addItem: (req, res) => {
    let item = req.body
    item.quantity = item.quantity ? item.quantity : 1
    if (!req.session.cart) {
      req.session.cart = [item]
    } else {
      let index = req.session.cart.findIndex(cartItem => cartItem.id === item.id)
      // console.log('index',index)
      if(index === -1){req.session.cart.push(item)} else if ( index != -1 ){
          console.log(index);
         req.session.cart[index].quantity ++
      }
    }
    res.send(req.session.cart)
  },
  removeItem: (req, res) => {
    let item =req.params.id
    if (!req.session.cart){
      res.send('Your cart is empty')
    } else {
      let index = req.session.cart.findIndex(cartItem => cartItem.id === parseInt(item))
      if(index != -1){req.session.cart.splice(index, 1)}
    }
    res.send(req.session.cart)
  },
  plusItem: (req, res) => {
    let item = req.body
    console.log(req.body);
    console.log(item);
    console.log(req.session.cart);
    let index = req.session.cart.findIndex(cartItem => cartItem.id === item.id)
    if(index != -1){req.session.cart[index].quantity++}
    res.send(req.session.cart)
  },
  minusItem: (req,res)=>{
    let item = req.body
    let index = req.session.cart.findIndex(cartItem => cartItem.id === item.id)
    if(index != -1){req.session.cart[index].quantity--}
    res.send(req.session.cart)
  }
}
