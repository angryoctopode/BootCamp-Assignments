'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

//console.log("\n *STARTING* \n");
// Get content from file
var contents = fs.readFileSync("./listings.json");
// Define to JSON type
var listings = JSON.parse(contents);

/* Connect to your database */

mongoose.connect("mongodb://User1:User1@ds127034.mlab.com:27034/angryoctopode-database", function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: mongodb://User1:User1@ds127034.mlab.com:27034/angryoctopode-database' + err);
  } else {
    console.log ('Succeeded connected to: mongodb://User1:User1@ds127034.mlab.com:27034/angryoctopode-database');
  }
});

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

for(var i = 0; i < listings.entries.length; i++) {
  var entry = listings.entries[i];
  entry["created_at"] = null;
  entry["updated_at"] = null;
  var newModel = new Listing(entry);
  newModel.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });
}

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
