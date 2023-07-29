import { WAREHOUSE_EDGE } from "./consts";
import { Position } from "./types";

export function isValidMove(x: number, y: number): boolean {
  return x >= 1 && x < WAREHOUSE_EDGE - 1 && y >= 1 && y < WAREHOUSE_EDGE - 1;
}

export function moveEast(position: Position): Position {
  const { x, y } = position;
  return isValidMove(x, y + 1) ? { x, y: y + 1 } : position;
}

export function moveWest(position: Position): Position {
  const { x, y } = position;
  return isValidMove(x, y - 1) ? { x, y: y - 1 } : position;
}

export function moveSouth(position: Position): Position {
  const { x, y } = position;
  return isValidMove(x + 1, y) ? { x: x + 1, y } : position;
}

export function moveNorth(position: Position): Position {
  const { x, y } = position;
  return isValidMove(x - 1, y) ? { x: x - 1, y } : position;
}
