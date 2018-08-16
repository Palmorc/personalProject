module.exports = {
  createOrder: async (req, res) => {
    try {
      let db = req.app.get('db')
      let orders = await db.createOrder(req.session.user.id)
      let order = orders[0]
      let orderId = order.id

      await Promise.all(req.session.cart.map(async product => {
        let total = product.price * product.quantity
        let response = await db.createOrderProduct([  orderId, product.id, product.quantity, total  ])
        return response
      }))

      res.sendStatus(200)
    } catch (e) {
      console.log('we have a problem:', e)
      res.status(500).send(e)
    }
  }
}
