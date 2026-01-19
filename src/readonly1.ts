
interface Person{
    name:string;
    age:number;
}

const person: Readonly<Person>={
    name:"Alice",
    age:25,
};

person.name='isabella';// this is  will be a error