function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log("No yard");
    }
    else {
        console.log("Yard is ".concat(yardSize, " sqft"));
    }
}
var home = {
    sqft: 500,
    yard: {
        sqft: 500
    }
};
printYardSize(home); //Prints 'Yard is 500 sqft'
