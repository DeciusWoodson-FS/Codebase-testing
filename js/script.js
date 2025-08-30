/**
 * Takes an array of numbers and returns the sum of all elements.
 * It ignores any non-numeric elements in the array.
 * @param {Array<any>} arr The input array.
 * @returns {number} The sum of the numeric elements.
 */
const sumOfArray = (arr) => {
  // Check if the input is actually an array. If not, return 0.
  if (!Array.isArray(arr)) {
    return 0;
  }

  // Use reduce to calculate the sum.
  // Before summing, filter the array to include only finite numbers.
  return arr
    .filter((item) => typeof item === "number" && isFinite(item))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

/**
 * Reverses the input string and returns the reversed result.
 * It converts non-string inputs into strings before reversing.
 * @param {any} str The input value to be reversed.
 * @returns {string} The reversed string.
 */
const reverseString = (str) => {
  // Handle null or undefined by returning an empty string.
  if (str === null || str === undefined) {
    return "";
  }

  // Convert the input to a string, then split, reverse, and join.
  return String(str).split("").reverse().join("");
};

/**
 * Takes an array of numbers and returns the largest number.
 * Returns -Infinity if the array is empty or contains no numbers.
 * @param {Array<any>} arr The input array.
 * @returns {number} The largest number in the array.
 */
const findMax = (arr) => {
  // If not an array, return -Infinity (a neutral value for max operations).
  if (!Array.isArray(arr)) {
    return -Infinity;
  }

  // Filter for only numeric values.
  const numbers = arr.filter(
    (item) => typeof item === "number" && isFinite(item)
  );

  // If there are no numbers left after filtering, return -Infinity.
  if (numbers.length === 0) {
    return -Infinity;
  }

  // Use Math.max with the spread operator to find the largest number.
  return Math.max(...numbers);
};

/**
 * Accepts a string of words and returns a new version where each word is capitalized.
 * @param {any} str The input string.
 * @returns {string} The capitalized string.
 */
const capitalizeWords = (str) => {
  // If input is not a string or is falsy (null, undefined, ''), return an empty string.
  if (typeof str !== "string" || !str) {
    return "";
  }

  // Split the string by spaces, map over each word, capitalize it, and join back.
  return str
    .split(" ")
    .map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
      }
      return ""; // Handles multiple spaces by returning an empty string for them.
    })
    .join(" ");
};
