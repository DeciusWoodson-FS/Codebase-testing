const expect = chai.expect;

describe("sumOfArray", () => {
  it("should return the sum of an array of positive numbers", () => {
    expect(sumOfArray([1, 2, 3, 4])).to.equal(10);
  });
  it("should return the sum of an array with negative numbers", () => {
    expect(sumOfArray([-1, -2, 3, 4])).to.equal(4);
  });
  it("should return 0 for an empty array", () => {
    expect(sumOfArray([])).to.equal(0);
  });
  it("should correctly sum an array with a single number", () => {
    expect(sumOfArray([5])).to.equal(5);
  });
  it("should ignore non-numeric values in the array", () => {
    expect(sumOfArray([1, "two", 3, null, undefined, {}])).to.equal(4);
  });
  it("should return 0 if the input is not an array", () => {
    expect(sumOfArray("hello")).to.equal(0);
    expect(sumOfArray(123)).to.equal(0);
    expect(sumOfArray(null)).to.equal(0);
  });
});

describe("reverseString", () => {
  it("should reverse a standard string", () => {
    expect(reverseString("hello")).to.equal("olleh");
  });
  it("should reverse a string with spaces and punctuation", () => {
    expect(reverseString("hello, world!")).to.equal("!dlrow ,olleh");
  });
  it("should return an empty string for an empty input string", () => {
    expect(reverseString("")).to.equal("");
  });
  it("should correctly reverse a single-character string", () => {
    expect(reverseString("a")).to.equal("a");
  });
  it("should convert a number to a string and reverse it", () => {
    expect(reverseString(12345)).to.equal("54321");
    expect(reverseString(-1)).to.equal("1-");
  });
  it("should return an empty string for null or undefined input", () => {
    expect(reverseString(null)).to.equal("");
    expect(reverseString(undefined)).to.equal("");
  });
});

describe("findMax", () => {
  it("should find the max number in an array of positive integers", () => {
    expect(findMax([1, 5, 2, 8, 3])).to.equal(8);
  });
  it("should find the max number when negative numbers are involved", () => {
    expect(findMax([-10, -5, -2, -8])).to.equal(-2);
  });
  it("should return -Infinity for an empty array", () => {
    expect(findMax([])).to.equal(-Infinity);
  });
  it("should return the number itself for a single-element array", () => {
    expect(findMax([42])).to.equal(42);
  });
  it("should ignore non-numeric values", () => {
    expect(findMax([1, "100", 5, null, 2])).to.equal(5);
  });
  it("should return -Infinity if no numbers are in the array", () => {
    expect(findMax(["a", "b", {}])).to.equal(-Infinity);
  });
  it("should return -Infinity for non-array input", () => {
    expect(findMax("test")).to.equal(-Infinity);
  });
});

describe("capitalizeWords", () => {
  it("should capitalize the first letter of each word", () => {
    expect(capitalizeWords("hello world")).to.equal("Hello World");
  });
  it("should handle already capitalized words correctly", () => {
    expect(capitalizeWords("JAVASCRIPT IS FUN")).to.equal("Javascript Is Fun");
  });
  it("should return an empty string if input is empty", () => {
    expect(capitalizeWords("")).to.equal("");
  });
  it("should handle extra spaces between words", () => {
    expect(capitalizeWords("multiple   spaces")).to.equal("Multiple   Spaces");
  });
  it("should handle leading/trailing spaces", () => {
    expect(capitalizeWords("  leading and trailing  ")).to.equal(
      "  Leading And Trailing  "
    );
  });
  it("should return an empty string for non-string inputs", () => {
    expect(capitalizeWords(123)).to.equal("");
    expect(capitalizeWords(null)).to.equal("");
    expect(capitalizeWords(undefined)).to.equal("");
    expect(capitalizeWords([])).to.equal("");
  });
});
