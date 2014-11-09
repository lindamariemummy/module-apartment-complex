module.exports = Inhabitant;

function Inhabitant(name, species) {
  this.name = name;
  this.species = species;
};

Inhabitant.prototype.toString = function() {
  return "a " + this.species + " named " + this.name + '\n';
}

