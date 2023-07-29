import { Position } from "./types";
import { moveNorth, moveEast, moveWest, moveSouth } from "./move";

export function sendCommands(
  command: string,
  currentPosition: Position
): Position {
  switch (command) {
    case "n":
      console.log("Moving North");
      return moveNorth(currentPosition);
    case "s":
      console.log("Moving South");
      return moveSouth(currentPosition);
    case "e":
      console.log("Moving East");
      return moveEast(currentPosition);
    case "w":
      console.log("Moving West");
      return moveWest(currentPosition);
    default:
      console.log(`Invalid command: ${command}`);
      return currentPosition;
  }
}
