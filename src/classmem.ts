class Person1{
    private name:string;
    public constructor(name:string){
        this.name =name;
    }
    public getName():string{
        return this.name;
    }

}

const person1 =new Person1("Charles");
console.log(person1.getName());
// person.name isn't accessible from outside the class 
// since it's private.



