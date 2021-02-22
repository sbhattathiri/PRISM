class Animal {
  constructor(animalName, scientificName) {
    this._animalName = animalName;
    this._scientificName = scientificName;
    this.secret = 'secret';
  }

  get name() {
    return this._animalName;
  }

  set name(animalName) {
    this._name = animalName;
  }

  get scientificName() {
    return this._scientificName;
  }

  set scientificName(scientifcName) {
    this._scientificName = scientifcName;
  }
}

crow = new Animal('Crow', 'Corvus corvus');

console.log(crow._animalName);
console.log(crow._scientificName);
crow._scientificName = 'Corvus albus';
console.log(crow._animalName);
console.log(crow._scientificName);

// problem - we can access this.secret
console.log(crow.secret);
