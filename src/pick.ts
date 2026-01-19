
interface Person{
    name:string;
    age:number;
    location?:string;
}
const peter: Pick<Person, 'name'>={
    name: 'Namkung'
    
}
console.log(peter);