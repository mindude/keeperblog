var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('Kitten', kittySchema);

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);
var fluffy = new Kitten({ name: 'fluffy' });
//fluffy.speak(); // "Meow name is fluffy"
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log(fluffy);
});
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});
//Kitten.find({ name: /^fluff/ }, callback);
