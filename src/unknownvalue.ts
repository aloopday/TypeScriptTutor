function processValue(value:unknown){
    if(typeof value ==='string'){
        console.log(value.toUpperCase());
    }else if(Array.isArray(value)){
        //value is now treated as any[]
        console.log(value.length);
    }
}