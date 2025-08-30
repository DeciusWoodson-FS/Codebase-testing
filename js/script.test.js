describe("sumOfArray", () => {
  // Normal Cases
  it("should return the sum of an array of positive numbers", () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
  });

  it("should return the sum of an array with negative numbers", () => {
    expect(sumOfArray([-1, -2, 3, 4])).toBe(4);
  });

  // Edge Cases
  it("should return 0 for an empty array", () => {
    expect(sumOfArray([])).toBe(0);
  });

  it("should correctly sum an array with a single number", () => {
    expect(sumOfArray([5])).toBe(5);
  });

  // Invalid Input Cases
  it("should ignore non-numeric values in the array", () => {
    expect(sumOfArray([1, "two", 3, null, undefined, {}])).toBe(4);
  });

  it("should return 0 if the input is not an array", () => {
    expect(sumOfArray("hello")).toBe(0);
    expect(sumOfArray(123)).toBe(0);
    expect(sumOfArray(null)).toBe(0);
  });
});

describe("reverseString", () => {
  // Normal Cases
  it("should reverse a standard string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("should reverse a string with spaces and punctuation", () => {
    expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
  });

  // Edge Cases
  it("should return an empty string for an empty input string", () => {
    expect(reverseString("")).toBe("");
  });

  it("should correctly reverse a single-character string", () => {
    expect(reverseString("a")).toBe("a");
  });

  // Invalid Input Cases
  it("should convert a number to a string and reverse it", () => {
    expect(reverseString(12345)).toBe("54321");
    expect(reverseString(-1)).toBe("1-");
  });

  it("should return an empty string for null or undefined input", () => {
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
  });
});

describe("findMax", () => {
  // Normal Cases
  it("should find the max number in an array of positive integers", () => {
    expect(findMax([1, 5, 2, 8, 3])).toBe(8);
  });

  it("should find the max number when negative numbers are involved", () => {
    expect(findMax([-10, -5, -2, -8])).toBe(-2);
  });

  // Edge Cases
  it("should return -Infinity for an empty array", () => {
    expect(findMax([])).toBe(-Infinity);
  });

  it("should return the number itself for a single-element array", () => {
    expect(findMax([42])).toBe(42);
  });

  // Invalid Input Cases
  it("should ignore non-numeric values", () => {
    expect(findMax([1, "100", 5, null, 2])).toBe(5);
  });

  it("should return -Infinity if no numbers are in the array", () => {
    expect(findMax(["a", "b", {}])).toBe(-Infinity);
  });

  it("should return -Infinity for non-array input", () => {
    expect(findMax("test")).toBe(-Infinity);
  });
});

describe("capitalizeWords", () => {
  // Normal Cases
  it("should capitalize the first letter of each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("should handle already capitalized words correctly", () => {
    expect(capitalizeWords("JAVASCRIPT IS FUN")).toBe("Javascript Is Fun");
  });

  // Edge Cases
  it("should return an empty string if input is empty", () => {
    expect(capitalizeWords("")).toBe("");
  });

  it("should handle extra spaces between words", () => {
    expect(capitalizeWords("multiple   spaces")).toBe("Multiple   Spaces");
  });

  it("should handle leading/trailing spaces", () => {
    expect(capitalizeWords("  leading and trailing  ")).toBe(
      "  Leading And Trailing  "
    );
  });

  // Invalid Input Cases
  it("should return an empty string for non-string inputs", () => {
    expect(capitalizeWords(123)).toBe("");
    expect(capitalizeWords(null)).toBe("");
    expect(capitalizeWords(undefined)).toBe("");
    expect(capitalizeWords([])).toBe("");
  });
});
