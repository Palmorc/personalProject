const axios = require('axios')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
const path = require('path')
const stripe = require('stripe')('sk_test_0sNiZlg9EKenyZ2XVmAJ7VSl')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4007
const ac = require('./controllers/AuthCtrl.js')
const sc = require('./controllers/StoreCtrl.js')
const cc = require('./controllers/CartCtrl.js')


massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Connected to database');
}).catch(err => {console.log(11111, err)})

app.use(bodyParser.json())

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))
app.use( express.static( `${__dirname}/../build` ) );



app.get('/auth/callback', ac.auth)
app.get('/api/currentuser', (req,res) => {
  // console.log(req.session);
  res.send(req.session.user)
})
app.get('/api/logout', (req,res)=>{
  req.session.destroy()
  res.sendStatus(200)
})

app.get('/api/items', sc.getItems)
app.get('/api/items/:id', sc.getOne)
app.get('/api/cart', cc.getItems)
app.post('/api/cart', cc.addItem )
app.delete('/api/cart/:id', cc.removeItem)
app.put('/api/cart/add', cc.plusItem)
app.put('/api/cart/remove', cc.minusItem)
app.post('/api/orders', sc.createOrder)


app.listen(port, ()=>{
  console.log('Listening on port', port);
})
