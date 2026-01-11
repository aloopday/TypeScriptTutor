class Persons{
    private readonly name:string;
    public constructor(name:string){
        this.name =name;
        //name cannot be changed after this initial
       // definition,which has to be either at it's declaration or in the 
       // constructor.

    }
    public getName():string{
        return this.name;
    }
}

const persons=new Persons("isabella");
console.log(persons.getName());
