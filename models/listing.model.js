const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const ListingSchema = new Schema({
  address: {type: String, required: true, max: 100},
  image: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  style: {type: String, required: true},
  on_market: {type: Boolean, required: true},
})

module.exports = mongoose.model('Listing', ListingSchema)