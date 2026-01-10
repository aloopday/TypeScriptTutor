function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    //{dividend,divisor}:{dividend:number,divisor:number}
    // first part :解構賦值，second part: 類型註解
    // const {dividend,divisor} =obj; // 解構
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
