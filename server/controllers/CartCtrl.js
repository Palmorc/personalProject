module.exports = {
  getItems: (req, res) => {
    res.send(req.session.cart)
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
    req.session.cart.splice(1,1)
  },
  updateItem: (req, res) => {

  }
}
