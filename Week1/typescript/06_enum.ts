//An enum is a special "class" that represents a group of constants 

//default
enum CardinalDirections {
    North,
    East,
    South,
    West
  };
              
  let currentDirection = CardinalDirections.East; //1
  console.log(currentDirection);


//initialised
enum CardinalDir {
    North=1,
    East,
    South,
    West
  };
              
  let currentDir = CardinalDir.East; //2
  console.log(currentDir);

//Fully Initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);

//String Enums
enum CarDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CarDirections.North);
  // logs "West"
  console.log(CarDirections.West);