var NamedValue1 = /** @class */ (function () {
    function NamedValue1(name) {
        this.name = name;
    }
    NamedValue1.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue1.prototype.getValue = function () {
        return this._value;
    };
    NamedValue1.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue1;
}());
var value1 = new NamedValue1('myNumber');
value1.setValue('myValue');
console.log(value1.toString()); //MyNumber: myValue1
