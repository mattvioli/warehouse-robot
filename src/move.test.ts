import { isValidMove, moveSouth, moveWest, moveEast, moveNorth } from "./move";

describe("isValidMove", () => {
  it("should return true for valid moves", () => {
    expect(isValidMove(5, 5)).toBe(true);
    expect(isValidMove(1, 1)).toBe(true);
    expect(isValidMove(10, 10)).toBe(true);
  });

  it("should return false for invalid moves", () => {
    expect(isValidMove(0, 5)).toBe(false);
    expect(isValidMove(5, 0)).toBe(false);
    expect(isValidMove(11, 5)).toBe(false);
    expect(isValidMove(5, 11)).toBe(false);
  });
});

describe("moveEast", () => {
  it("should move east when it is a valid move", () => {
    const position = { x: 5, y: 5 };
    expect(moveEast(position)).toEqual({ x: 5, y: 6 });
  });

  it("should not move east when it is an invalid move", () => {
    const position = { x: 5, y: 10 };
    expect(moveEast(position)).toEqual(position);
  });
});

describe("moveWest", () => {
  it("should move west when it is a valid move", () => {
    const position = { x: 5, y: 5 };
    expect(moveWest(position)).toEqual({ x: 5, y: 4 });
  });

  it("should not move west when it is an invalid move", () => {
    const position = { x: 5, y: 1 };
    expect(moveWest(position)).toEqual(position);
  });
});

describe("moveSouth", () => {
  it("should move south when it is a valid move", () => {
    const position = { x: 5, y: 5 };
    expect(moveSouth(position)).toEqual({ x: 6, y: 5 });
  });

  it("should not move south when it is an invalid move", () => {
    const position = { x: 10, y: 5 };
    expect(moveSouth(position)).toEqual(position);
  });
});

describe("moveNorth", () => {
  it("should move north when it is a valid move", () => {
    const position = { x: 5, y: 5 };
    expect(moveNorth(position)).toEqual({ x: 4, y: 5 });
  });

  it("should not move north when it is an invalid move", () => {
    const position = { x: 1, y: 5 };
    expect(moveNorth(position)).toEqual(position);
  });
});
