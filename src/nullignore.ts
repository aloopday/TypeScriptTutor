
function getValue():string|undefined{
    return 'hello hong kong ';
}

let value =getValue();
console.log('value length:' +value!.length);
//just like casting, this can be unsafe and should be used with care.
