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
      req.session.cart.push(item)
    }
    res.send(req.session.cart)
  },
  removeItem: (req, res) => {
    let item=req.body
    if (!req.session.cart){
      res.send('Your cart is empty')
    } else {
      req.session.cart.splice(item.id,1)
      res.send(req.session.cart)
    }
  },
  plusItem: (req, res) => {
    let item = req.body
    let id = item.id

    if(id === item.id){item.quantity++}
    res.send(item.quantity)
  },
  minusItem: (req,res)=>{
    let item = req.body
    item.quantity --
    res.send(item.quantity)
  }
}
