import { generateDiamond } from "./index";

describe("first test", () => {
  test("should pass", () => {
    expect(true);
  });
});

describe("test with A", () => {
  test("should pass", () => {
    const diamondExpected = "A";
    const letter = "A";
    const result = generateDiamond(letter);

    expect(result).toEqual(diamondExpected);
  });

  test("should pass with A and B", () => {
    const diamondExpected = ` A
B B
 A`;
    const letter = "B";
    const result = generateDiamond(letter);

    expect(result).toEqual(diamondExpected);
  });
});
