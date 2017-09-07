/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  code: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  coordinates: {
    latitude: {type: Number},
    longitude: {type: Number}
  },
  address: {type: String},
  created_at: {type: String},
  updated_at: {type: String}
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var currDate = new Date();
  this.update_at = currDate;
  if(!this.created_at) {
      this.created_at = currDate;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
