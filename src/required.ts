
interface Car{
    make:string;
    model:string;
    mileage?:number;
}

let myCar:Required<Car>={
    make:'Tesla',
    model:'Model Y+',
    mileage:15000 // `Required` forces mileage to be defined
};
console.log(myCar);

let anotherCar:Required<Car>={
    make:`Toyota`,
    model:'Corolla',
    mileage:1900
};
console.log(anotherCar);

