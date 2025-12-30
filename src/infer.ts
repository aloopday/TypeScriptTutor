//TypeScript infers 'string'
let username ="alex";
//Typescript infers 'number'
let score=199;

//typescript infers 'boolean[]'
let flags=[true,false,true];
//Typescript infers return type as 'number'

function add(a:number,b:number){
    return a +b;
}

//Log the values to see them in the output
console.log(username);
console.log(score);
console.log(flags);
console.log(add(8,3));