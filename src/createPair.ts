function createPair<S,T>(v1: S, v2:T):[S,T]{
    return [v1,v2];
}

console.log(createPair<string,number>
    ('hello',42)
); //['Hello',42]
//TypeScript can also infer the type of 
// the generic parameter from the function parameters.