//1.JSON.parse returns 'any' because the structure isn't known at compile time 
var data = JSON.parse('{"name":"Alice","age":39}');
console.log(data);
//2.variables declared without initialization
var something; //Type is 'any'
something = 'hello';
something = 42; // No error
console.log(something);
