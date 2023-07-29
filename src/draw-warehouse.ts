import { Position } from "./types";

export function drawWarehouse(robotPosition: Position): void {
  const warehouse: string[][] = [];

  // Initialize the warehouse with empty spaces
  for (let i = 0; i < 12; i++) {
    warehouse[i] = [];
    for (let j = 0; j < 12; j++) {
      warehouse[i][j] = ".";
    }
  }

  // Add walls to the warehouse
  for (let i = 0; i < 12; i++) {
    warehouse[i][0] = "#"; // left wall
    warehouse[i][11] = "#"; // right wall
    warehouse[0][i] = "#"; // top wall
    warehouse[11][i] = "#"; // bottom wall
  }

  // Add the robot to the warehouse
  const { x, y } = robotPosition;
  warehouse[x][y] = "R";

  // Draw the warehouse
  for (let i = 0; i < 12; i++) {
    console.log(warehouse[i].join(""));
  }
}
