import "index";

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
});
