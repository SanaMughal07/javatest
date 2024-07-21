function countVowels(str) {
    
    const vowels = 'aeiouAEIOU';
    
   
    let count = 0;
    
    
    for (let i = 0; i < str.length; i++) {
    
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    
 
    return count;
  }
  
  // Example usage
  console.log(countVowels('Hello World')); 
  console.log(countVowels('JavaScript'));  
  console.log(countVowels('OpenAI'));     

  
      
  /**
 * Filters out negative numbers from an array.
 * @param {number[]} arr - The input array of numbers.
 * @return {number[]} A new array containing only non-negative numbers.
 */
function filterOutNegatives(arr) {
    return arr.filter(num => num >= 0);
  }
  
  // Example usage
  const numbers = [1, -2, 3, -4, 5];
  const filteredNumbers = filterOutNegatives(numbers);
  console.log(filteredNumbers); 
   

/**
 * Counts the number of vowels in a string.
 * @param {string} str - The input string.
 * @return {number} The number of vowels in the string.
 */
function countVowels(str) {
  
    const vowelRegex = /[aeiouAEIOU]/g;
  
    const matches = str.match(vowelRegex);

    return matches ? matches.length : 0;
  }
  
  // Example usage
  console.log(countVowels('Hello World')); 
  console.log(countVowels('JavaScript'));  
  console.log(countVowels('rhythm'));      
  
/**
 *
 * @param {string} str 
 * @return {boolean} 
 */
function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
  }
  
  // Example usage
  console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
  console.log(isPalindrome('Hello World')); // Output: false
  console.log(isPalindrome('Racecar')); // Output: true
  console.log(isPalindrome('12321')); // Output: true
  console.log(isPalindrome('Not a palindrome')); // Output: false
  /**
 * Checks if either of two integer values is in the range 50 - 99 (inclusive).
 * @param {number} a - The first integer value.
 * @param {number} b - The second integer value.
 * @return {boolean} `true` if either value is within the range, otherwise `false`.
 */
function isInRange(a, b) {
    return (a >= 50 && a <= 99) || (b >= 50 && b <= 99);
  }
  
  // Example usage
  console.log(isInRange(45, 75));  // Output: true
  console.log(isInRange(100, 49)); // Output: false
  console.log(isInRange(55, 30));  // Output: true
  console.log(isInRange(45, 98));  // Output: true
  console.log(isInRange(99, 99));  // Output: true
  console.log(isInRange(49, 50));  // Output: true
  /**
 * Maps each element of the array to a new value using the provided function and then finds the minimum value.
 * @param {Array} arr - The input array of elements.
 * @param {Function} fn - The function used to map each element.
 * @return {number} The minimum value after mapping.
 */
function getMinValueAfterMapping(arr, fn) {
    // Map the array elements to new values
    const mappedArray = arr.map(fn);
    // Find the minimum value in the mapped array
    return Math.min(...mappedArray);
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const fn = x => x * 2;
  
  console.log(getMinValueAfterMapping(arr, fn)); // Output: 2
  /**
 * Creates a new string consisting of 4 copies of the last 3 characters of a given original string.
 * @param {string} str - The original string.
 * @return {string} A new string with 4 copies of the last 3 characters.
 */
function createUpdatedString(str) {
    // Check if the string length is 3 or more
    if (str.length < 3) {
      throw new Error('String length must be 3 or more');
    }
    // Extract the last 3 characters
    const lastThreeChars = str.slice(-3);
    // Create a new string with 4 copies of the last 3 characters
    return lastThreeChars.repeat(4);
  }
  
  // Example usage
  console.log(createUpdatedString("hello"));  // Output: "lololololo"
  console.log(createUpdatedString("abcdef")); // Output: "defdefdefdef"
  console.log(createUpdatedString("abc"));    // Output: "abcabcabcabc"
  console.log(createUpdatedString("xyz"));    // Output: "xyzxyzxyzxyz"
  /**
 * Determines the type of a given angle based on its measure in degrees.
 * @param {number} angle - The angle in degrees.
 * @return {string} The type of the angle: "Acute", "Right", "Obtuse", or "Straight".
 */
function findAngleType(angle) {
    if (angle <= 0 || angle >= 180) {
      return 'Invalid angle';
    } else if (angle === 90) {
      return 'Right angle';
    } else if (angle < 90) {
      return 'Acute angle';
    } else if (angle < 180) {
      return 'Obtuse angle';
    } else if (angle === 180) {
      return 'Straight angle';
    }
  }
  
  // Example usage
  console.log(findAngleType(30));   // Output: "Acute angle"
  console.log(findAngleType(90));   // Output: "Right angle"
  console.log(findAngleType(120));  // Output: "Obtuse angle"
  console.log(findAngleType(180));  // Output: "Straight angle"
  console.log(findAngleType(200));  // Output: "Invalid angle"
  console.log(findAngleType(-10));  // Output: "Invalid angle"
  