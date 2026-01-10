
let z ='Hello';

console.log(((z as unknown) as number).length);;
// the length is not exist in the number style.
// x is not actually a number so this will return  undefined.

