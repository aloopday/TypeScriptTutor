// no error on optional property, remove it and see what happens.
const mycar:{type:string, mileage?:number}={
    type:"xiaomi"
};
mycar.mileage=20000;
console.log(mycar);