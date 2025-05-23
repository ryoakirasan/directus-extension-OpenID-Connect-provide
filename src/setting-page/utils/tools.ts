/**
 * Generates a random string of specified length with mixed numbers, uppercase and lowercase letters
 * @param {number} length - Length of the random string to generate (must be a positive integer)
 * @returns {string} - The generated random string
 */
export const generateRandomString = (length) => {
  if (typeof length !== "number" || !Number.isInteger(length) || length <= 0) {
      console.error("Error: Invalid length. Please provide a positive integer for the string length.");
      return '';
    }
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }