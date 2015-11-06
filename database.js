var dbUrl = "library"
  , collections = ["books"]
  , mongojs = require("mongojs");

var db = mongojs(dbUrl,collections);

module.exports = db