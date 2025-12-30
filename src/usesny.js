var u = true;
u = "string"; //Error:Type 'string' is not assignable to type 'boolean'
u.runANonExistentMethod(); //Error
console.log(Math.round(u));
