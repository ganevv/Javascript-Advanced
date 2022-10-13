function extendPrototype(classDef) {
    classDef.prototype.species = 'Human',
        classDef.prototype.toSpeciesString = function () {
            return `I am a ${this.species}. ${this.toString()}`
        }
}

function Person(name, age) {
    this.name = name,
        this.age = age
}

Person.prototype.toString = function () {
    return `To string method from prototype of ${this.name}`
}

extendPrototype(Person)

const p = new Person('Peter', 32)
console.log(p.toSpeciesString())