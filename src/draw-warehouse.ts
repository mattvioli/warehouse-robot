import { Position } from "./types";

const WAREHOUSE_EDGE = 12;

export function drawWarehouse(robotPosition: Position): void {
  const warehouse: string[][] = [];

  // Initialize the warehouse with empty spaces
  for (let i = 0; i < WAREHOUSE_EDGE; i++) {
    warehouse[i] = [];
    for (let j = 0; j < WAREHOUSE_EDGE; j++) {
      warehouse[i][j] = ".";
    }
  }

  // Add walls to the warehouse
  for (let i = 0; i < WAREHOUSE_EDGE; i++) {
    warehouse[i][0] = "#"; // left wall
    warehouse[i][WAREHOUSE_EDGE - 1] = "#"; // right wall
    warehouse[0][i] = "#"; // top wall
    warehouse[WAREHOUSE_EDGE - 1][i] = "#"; // bottom wall
  }

  // Add the robot to the warehouse
  const { x, y } = robotPosition;
  warehouse[x][y] = "R";

  // Draw the warehouse
  for (let i = 0; i < WAREHOUSE_EDGE; i++) {
    console.log(warehouse[i].join(""));
  }
}
