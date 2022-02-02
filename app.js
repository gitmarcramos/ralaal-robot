const directions = ["north", "east", "south", "west"];

let position = {
  direction: "north",
  x: 7,
  y: 3,
};

// make the robot face the good direction
function rotates(direction) {
  switch (direction) {
    case "R":
      position.direction =
        directions[directions.indexOf(position.direction) + 1];
      if (directions.indexOf(position.direction) === -1) {
        position.direction = "north";
      }
      break;
    case "L":
      position.direction =
        directions[directions.indexOf(position.direction) - 1];
      if (directions.indexOf(position.direction) === -1) {
        position.direction = "west";
      }
      break;
  }
}

//when facing a direction, the robot moves to this direction
function move() {
  switch (position.direction) {
    case "north":
      position.y++;
      break;
    case "east":
      position.x++;
      break;
    case "south":
      position.y--;
      break;
    case "west":
      position.x--;
      break;
  }
}


function start(instructions) {
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === "a" || instructions[i] === "A") {
      move();
    }
    if (instructions[i] === "r" || instructions[i] === "R") {
      rotates("R");
    }
    if (instructions[i] === "l" || instructions[i] === "L") {
      rotates("L");
    }
  }
}
start("RAALAL")

console.log(position)