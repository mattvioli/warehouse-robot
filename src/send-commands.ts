import { Position } from "./types";
import { moveNorth, moveEast, moveWest, moveSouth } from "./move";

export function sendCommands(
  command: string,
  currentPosition: Position
): Position {
  switch (command) {
    case "N":
      console.log("Moving North");
      return moveNorth(currentPosition);
    case "S":
      console.log("Moving South");
      return moveSouth(currentPosition);
    case "E":
      console.log("Moving East");
      return moveEast(currentPosition);
    case "W":
      console.log("Moving West");
      return moveWest(currentPosition);
    default:
      console.log(`Invalid command: ${command}`);
      return currentPosition;
  }
}
