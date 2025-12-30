//TypeScript infers 'string'
var username = "alex";
//Typescript infers 'number'
var score = 199;
//typescript infers 'boolean[]'
var flags = [true, false, true];
//Typescript infers return type as 'number'
function add(a, b) {
    return a + b;
}
//Log the values to see them in the output
console.log(username);
console.log(score);
console.log(flags);
console.log(add(8, 3));
