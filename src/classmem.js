var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Charles");
console.log(person1.getName());
// person.name isn't accessible from outside the class 
// since it's private.
