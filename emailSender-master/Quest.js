var mongoose = require('mongoose');

var questSchema = mongoose.Schema({
  questName: {type:String, required: true}
});

var Quest = module.exports = mongoose.model('Quest', questSchema);

