class Person{
    //name is a private member variable
    public constructor(private name:string)
    {}//TypeScript provides a convenient way to define class
    //members in the constructor, by adding a visibility modifier
    // to the parameter.
    
    public getName():string{
        return this.name;
    }
}

const person = new Person("Charles");
console.log(person.getName());