import readline from "readline";
import { Position } from "./types";
import { drawWarehouse } from "./draw-warehouse";
import { sendCommands } from "./send-commands";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const initialPosition: Position = { x: 5, y: 5 };

export function promptForCommands(robotPosition: Position) {
  console.log({ robotPosition });
  rl.question(
    'Enter commands for the robot (e.g., "N E S W"), or Q to quit: ',
    (commands) => {
      let newPosition = robotPosition;
      if (commands.toLowerCase() === "q") {
        rl.close();
        return;
      }

      const commandsArray = commands.split(" ");

      for (const command of commandsArray) {
        newPosition = sendCommands(command, newPosition);
        drawWarehouse(newPosition);
      }

      promptForCommands(newPosition);
    }
  );
}

promptForCommands(initialPosition);
