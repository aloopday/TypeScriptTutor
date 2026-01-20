type StringMap={[key:string]:unknown};

//`key of StringMap` resolves to `string` here

function createStringPair(property1:keyof StringMap, value:string):StringMap{
    return {[property1]:value};
}

console.log(JSON.stringify(createStringPair('greeting','hello hongkong')));