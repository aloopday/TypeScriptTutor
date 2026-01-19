
type Primitive = string |number |boolean;

const value: Exclude<Primitive,string>=true;
// a string cannot be used here since exclude 
// removed it from the type.

console.log(typeof value);