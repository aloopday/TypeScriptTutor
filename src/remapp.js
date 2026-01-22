//key remapping demo (runtime helper)
function makeGetters(obj) {
    var out = {};
    var _loop_1 = function (k) {
        var cap = k.charAt(0).toUpperCase() + k.slice(1);
        out["get" + cap] = function () { return obj[k]; };
    };
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        _loop_1(k);
    }
    return out;
}
var c = { id: 8, name: "abuba", email: "alex@gmail.com" };
var g = makeGetters(c);
console.log(g.getId());
console.log(g.getName());
console.log(g.getEmail());
