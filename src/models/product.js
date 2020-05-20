import mongoose from 'mongoose'

const schema = new mongoose.Schema ({
  url: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Product = mongoose.model('Product', schema)

export default Product