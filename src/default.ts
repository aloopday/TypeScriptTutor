
class NamedValue1<T =string>{
    private _value: T|undefined;
    constructor(private name:string){}
    public setValue(value: T){
        this._value =value;
    }

    public getValue(): T|undefined{
        return this._value;
    }

    public toString():string{
        return `${this.name}: ${this._value}`;

    }
}

let value1= new NamedValue1('myNumber');
value1.setValue('myValue');
console.log(value1.toString());//MyNumber: myValue1