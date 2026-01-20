//`key of StringMap` resolves to `string` here
function createStringPair(property1, value) {
    var _a;
    return _a = {}, _a[property1] = value, _a;
}
console.log(JSON.stringify(createStringPair('greeting', 'hello hongkong')));
