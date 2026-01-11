var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
        //name cannot be changed after this initial
        // definition,which has to be either at it's declaration or in the 
        // constructor.
    }
    Persons.prototype.getName = function () {
        return this.name;
    };
    return Persons;
}());
var persons = new Persons("isabella");
console.log(persons.getName());
