function printMileage(mileage:number|null|undefined){
    console.log(`Mileage is ${mileage ?? 'Note Available'}`);
}

printMileage(null);
printMileage(15000);