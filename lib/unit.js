var inhabitant = require('inhabitant');

function Unit(number) {
  this.number = number;
  this.inhabitants = [];

};

Unit.prototype.addInhabitant(name, species) {
  this.inhabitants[this.inhabitants.length] = new inhabitant()
}


module.exports = unit;