const Listing = require('../models/listing.model')

exports.test = (req, res, next) => {
  res.send('Greetings from the test controller')
}

// VIEW ALL
exports.view_all = (req, res, next) => {
  Listing.find({})
  .then(result => {
    res.send(result)
  })
}

// VIEW ONE
exports.getOne = (req, res, next) => {
	const id = req.params.id;
  Listing.findById(id)
    .then(result => {
		res.send(result)
	})
}

// VIEW BY CITY
exports.listing_city = (req, res, next) => {
  const listingCity = req.params.city;
  Listing.find({
      city: listingCity
    })
    .then(result => {
      res.send(result)
    })
};

exports.listing_state = (req, res, next) => {
  const listingState = req.params.state;
  Listing.find({
      state: listingState
    })
    .then(result => {
      res.send(result)
    })
};

exports.listing_create = (req, res, next) => {
  let listing = new Listing({
    address: req.body.address,
    image: req.body.image,
    city: req.body.city,
    state: req.body.state,
    style: req.body.style,
    on_market: req.body.on_market
  })
  listing.save((err) => {
    if(err) {
      return next(err)
    }
    res.send('Listing created successfully')
  })
}

exports.listing_update = (req, res, next) => {
  Listing.findByIdAndUpdate(req.params.id, { $set: req.body },
    (err, listing) => {
    if(err) return next(err)
    res.send('Listing updated')
  })
}

exports.listing_delete = (req, res, next) => {
  Listing.findByIdAndRemove(req.params.id, (err) => {
    if(err) return next(err)
    res.send('Deleted Successfully')
  })
}