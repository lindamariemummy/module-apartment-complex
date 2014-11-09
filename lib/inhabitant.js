module.exports = Inhabitant;

function Inhabitant(name, species) {
  this.name = name;
  this.species = species;
};

Inhabitant.prototype.toString() {
  return "A " + species + " named " + name;
}

