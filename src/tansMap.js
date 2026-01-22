var user1 = { id: 1, name: "Alice", email: "alice@gmail.com" };
function createFlags(obj) {
    var out = {};
    for (var k in obj)
        out[k] = true;
    return out;
}
var userFlags = createFlags(user1);
console.log(userFlags.id);
console.log(userFlags.name);
console.log(userFlags.email);
