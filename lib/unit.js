var Inhabitant = require('./inhabitant.js');

function Unit(number) {
  this.number = number;
  this.inhabitants = [];
}

Unit.prototype.addInhabitant = function(name, species) {
  this.inhabitants[this.inhabitants.length] = new Inhabitant(name, species);
};

Unit.prototype.toString = function() {
  var inhabitantsString = '';

  for (var i = 0; i < this.inhabitants.length; i++) {
    inhabitantsString += this.inhabitants[i].toString();
  }
  return '\nThe inhabitants of unit ' + this.number + ' are:\n' + inhabitantsString;
};

module.exports = Unit;
