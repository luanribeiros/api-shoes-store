import mongoose from 'mongoose'

const schema = new mongoose.Schema ({
  url: String,
  name: String,
  description: String,
  price: Number
})

const Product = mongoose.model('Product', schema)

export default Product