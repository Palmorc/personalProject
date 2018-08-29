module.exports={
  getItems: async (req,res) => {
    try {
      let db = req.app.get('db')
      let items = await db.allProducts()
      res.send(items)
    } catch (e) {
      console.log('Error getting items:',e);
      res.status(500).send(e)
    }
  },

  getOne: async (req,res) => {
    try {
      let db = req.app.get('db')
      let items = await db.findProduct(req.params.id)
      res.send(items)
    } catch (e) {
      console.log('Error getting single product:',e);
      res.status(500).send(e)
    }
  },

  createOrder: async (req,res) => {
    try {
      let db = req.app.get('db')
      let item = req.body
      let order = await db.createOrder(req.params.user_id)
      let op = await db.createOrderProduct(req.params.order_id, req.params.product_id,item.quantity, item.price*item.quantity )
      res.send(order, op)
    } catch (e) {

    }
  }

}
