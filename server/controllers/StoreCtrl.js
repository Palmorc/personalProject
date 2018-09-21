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
      console.log('Hello!');
      let db = req.app.get('db')
      let item = req.body

      // TODO this is only for development.  Remove for production
      if (!req.session.user) {
        req.session.user = {id:1}
      }

      let order = await db.createOrder(req.session.user.id)
      console.log(req.session.user.id);
      let op = await db.createOrderProduct(req.params.order_id, req.params.product_id,item.quantity, item.price*item.quantity )
      res.send(order)
    } catch (e) {
      console.log('Error creating order:',e);
      res.status(500).send(e)
    }
  }

}
