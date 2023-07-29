import { drawWarehouse } from "./draw-warehouse";

describe("drawWarehouse", () => {
  it("should draw the warehouse with the robot at the correct position", () => {
    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

    const robotPosition = { x: 3, y: 3 };
    drawWarehouse(robotPosition);

    const outputLines = consoleLogSpy.mock.calls.map(([message]) => message);

    expect(outputLines[0]).toEqual("############");
    expect(outputLines[1]).toEqual("#..........#");
    expect(outputLines[2]).toEqual("#..........#");
    expect(outputLines[3]).toEqual("#..R.......#");
    expect(outputLines[4]).toEqual("#..........#");
    expect(outputLines[5]).toEqual("#..........#");
    expect(outputLines[6]).toEqual("#..........#");
    expect(outputLines[7]).toEqual("#..........#");
    expect(outputLines[8]).toEqual("#..........#");
    expect(outputLines[9]).toEqual("#..........#");
    expect(outputLines[10]).toEqual("#..........#");
    expect(outputLines[11]).toEqual("############");

    jest.clearAllMocks();
  });
});
