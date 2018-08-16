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
      let order = await db.createOrder(req.params.user_id)
      res.send(order)
    } catch (e) {

    }
  }

}
