const express = require('express')
const router = express.Router()

const Consumer = require('../Controller/ConsumerController')
const Product = require('../Controller/ProductController')

module.exports = function () {
  /*****************  USER  ********************/
  router.post('/api/consumer', Consumer.add)
  router.get('/api/consumer', Consumer.show)


  router.post('/api/product', Product.add)

  return router
}
