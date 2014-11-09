var Unit = require('./unit.js');

function ApartmentComplex() {
  this.units = [];
}

ApartmentComplex.prototype.printApartmentInformation = function() {
  for (var i = 0; i < this.units.length; i++) {
    console.log(this.units[i].toString());
  }
};

ApartmentComplex.prototype.addUnit = function(number) {
  this.units[this.units.length] = new Unit(number);
};

ApartmentComplex.prototype.addInhabitant = function(number, name, species) {
  var i = 0;
  while (this.units[i].number != number) {
    i++;
  }
  this.units[i].addInhabitant(name, species);

};

var apt = new ApartmentComplex();

apt.addUnit(101);
apt.addUnit(102);
apt.addUnit(202);
apt.addInhabitant(101, 'Sally', 'human');
apt.addInhabitant(101, 'Joey', 'human');
apt.addInhabitant(101, 'Sean', 'human');
apt.addInhabitant(101, 'Fido', 'dog');
apt.addInhabitant(101, 'Rajah', 'cat');
apt.addInhabitant(102, 'Linda', 'human');
apt.addInhabitant(202, 'Charlotte', 'spider');
apt.addInhabitant(202, 'Walter', 'spider');
apt.printApartmentInformation();
