var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// Logs 1 since we initialized the first value o to something other 0
console.log(CardinalDirections.North);
//logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West);
