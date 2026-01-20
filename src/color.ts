
type Color="read"|"green"|"blue";

type HexColor<T extends Color>=`#${string}`;
let myColor: HexColor<"blue">="#0000FF";
console.log(myColor);