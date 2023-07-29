import { promptForCommands } from "./index";

jest.mock("readline");

describe("promptForCommands", () => {
  it("should draw the warehouse with the robot at the correct position", () => {
    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

    const initialPosition = { x: 5, y: 5 };
    promptForCommands(initialPosition);

    const outputLines = consoleLogSpy.mock.calls.map(([message]) => message);

    expect(outputLines[outputLines.length - 1]).toEqual({
      robotPosition: { x: 5, y: 5 },
    });

    consoleLogSpy.mockRestore();
  });
});
