
//Covert all properties to boolean
type Flags<T>={
    [k in keyof T]:boolean;
};

interface User{
    id: number;
    name: string;
    email:string;
}

const user1:User={id:1, name:"Alice",email:"alice@gmail.com"};
function createFlags<T extends object>(obj:T):Flags<T>{
    const out: any ={};
    for(const k in obj) out[k]=true;
    return out;
}

const userFlags=createFlags(user1);
console.log(userFlags.id);
console.log(userFlags.name);
console.log(userFlags.email);
