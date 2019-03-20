// Create a constructor
function Animal() {}

Animal.prototype.eat = function() { 
  return "mom mom mom"
}

// Create a constructor
function Bird() {}

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype)
// Asign constructor prop to Bird
Bird.prototype.constructor = Bird
// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() { 
  return "num num num"
}

console.log(Bird.prototype.eat(), Bird.prototype.constructor)
