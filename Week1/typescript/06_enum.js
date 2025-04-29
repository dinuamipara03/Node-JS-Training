//An enum is a special "class" that represents a group of constants 
//default
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.East; //1
console.log(currentDirection);
//initialised
var CardinalDir;
(function (CardinalDir) {
    CardinalDir[CardinalDir["North"] = 1] = "North";
    CardinalDir[CardinalDir["East"] = 2] = "East";
    CardinalDir[CardinalDir["South"] = 3] = "South";
    CardinalDir[CardinalDir["West"] = 4] = "West";
})(CardinalDir || (CardinalDir = {}));
;
var currentDir = CardinalDir.East; //2
console.log(currentDir);
//Fully Initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
//String Enums
var CarDirections;
(function (CarDirections) {
    CarDirections["North"] = "North";
    CarDirections["East"] = "East";
    CarDirections["South"] = "South";
    CarDirections["West"] = "West";
})(CarDirections || (CarDirections = {}));
;
// logs "North"
console.log(CarDirections.North);
// logs "West"
console.log(CarDirections.West);
