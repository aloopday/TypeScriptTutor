
//key remapping demo (runtime helper)

type User2={id:number; name:string; email:string;};
function makeGetters<T extends Record<string,any>>(obj:T){
    const out: any={};
    for(const k of Object.keys(obj)){
        const cap=k.charAt(0).toUpperCase()+k.slice(1);
        out["get"+cap]=()=>obj[k];

    }

    return out as {
        [K in keyof T as `get${Capitalize<string & K>}`]:()=>T[K];
    };
}

const c: User2={id:8,name:"abuba",email:"alex@gmail.com"};
const g=makeGetters(c);
console.log(g.getId());
console.log(g.getName());
console.log(g.getEmail());
