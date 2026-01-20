interface Person{
    name:string;
    age:number;
    home:string;
}
//keyof Person  here creates a union type of "name" ,"age" and" home ,other strings  will not be allowed

function printPersonProperty(person2:Person,property:keyof Person){
    console.log(`Printing person property ${property}:"${person2[property]}"`)
}

let person2={
    name:"charles",
    age:25,
    home:"Hong Kong"
}

printPersonProperty(person2,"name");