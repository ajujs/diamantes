import { generateDiamond } from "./index";

describe("first test", () => {
  test("should pass", () => {
    expect(true);
  });
});

describe("diamond renders", () => {
  test("should render A diamont", () => {
    const diamondExpected = `
 A
`;
    const result = generateDiamond("A");
    expect(result).toEqual(diamondExpected);
  });

  test("should render B diamont", () => {
    const diamondExpected = `
 A

B B

 A
`;
    const result = generateDiamond("B");

    expect(result).toEqual(diamondExpected);
  });

  test("should pass with E", () => {
    const diamondExpected = `
    A

   B B

  C   C

 D     D

E       E

 D     D

  C   C

   B B

    A
`;
    const letter = "E";
    const result = generateDiamond(letter);

    expect(result).toEqual(diamondExpected);
  });
});
