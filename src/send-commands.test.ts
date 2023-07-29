import { sendCommands } from "./send-commands";
import { moveNorth, moveSouth, moveEast, moveWest } from "./move";

describe("sendCommands", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should move North when given "N" command', () => {
    const currentPosition = { x: 5, y: 5 };
    const newPosition = sendCommands("N", currentPosition);
    expect(newPosition).toEqual(moveNorth(currentPosition));
    expect(console.log).toHaveBeenCalledWith("Moving North");
  });

  it('should move South when given "S" command', () => {
    const currentPosition = { x: 5, y: 5 };
    const newPosition = sendCommands("S", currentPosition);
    expect(newPosition).toEqual(moveSouth(currentPosition));
    expect(console.log).toHaveBeenCalledWith("Moving South");
  });

  it('should move East when given "E" command', () => {
    const currentPosition = { x: 5, y: 5 };
    const newPosition = sendCommands("E", currentPosition);
    expect(newPosition).toEqual(moveEast(currentPosition));
    expect(console.log).toHaveBeenCalledWith("Moving East");
  });

  it('should move West when given "W" command', () => {
    const currentPosition = { x: 5, y: 5 };
    const newPosition = sendCommands("W", currentPosition);
    expect(newPosition).toEqual(moveWest(currentPosition));
    expect(console.log).toHaveBeenCalledWith("Moving West");
  });

  it("should return the current position for invalid commands", () => {
    const currentPosition = { x: 5, y: 5 };
    const newPosition = sendCommands("X", currentPosition); // An invalid command
    expect(newPosition).toEqual(currentPosition);
    expect(console.log).toHaveBeenCalledWith("Invalid command: X");
  });
});
