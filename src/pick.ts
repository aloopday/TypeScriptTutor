
interface Person{
    name:string;
    age:number;
    location?:string;
}
const peter: Pick<Person, 'name'>={
    name: 'Namkung'
    // 'PIck' has only kept name, so age and location were removed from the 
    //type and they can't be defined here.
}
console.log(peter);