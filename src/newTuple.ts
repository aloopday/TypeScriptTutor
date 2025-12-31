//define out tuple
let newTuple:[number,boolean,string];


//initialize correctly
newTuple =[5,false,'charels'];

// we have to no type safety in out tuple for inindexes 3+
newTuple.push('Alex');
//instead use our readonly tuple
const newReadonlyTuple: readonly [number,boolean,string] =[5,true,'sonia'];
//throws error as it is readonly.
newReadonlyTuple.push('Coding god took a day');