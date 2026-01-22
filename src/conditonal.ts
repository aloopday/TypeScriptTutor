
//Conditional types (runtime illustratio)
type IsString<T>=T extends string ?true:false;
type ArrayElement<T>