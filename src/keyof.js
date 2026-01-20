//keyof Person  here creates a union type of "name" ,"age" and" home ,other strings  will not be allowed
function printPersonProperty(person2, property) {
    console.log("Printing person property ".concat(property, ":\"").concat(person2[property], "\""));
}
var person2 = {
    name: "charles",
    age: 25,
    home: "Hong Kong"
};
printPersonProperty(person2, "name");
