function consecutiveSubstrings(string) {
  // type your code here
  function getConsecutiveSubstrings(str) {
    const substrings = [];
    
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        substrings.push(str.slice(i, j));
      }
    }
    
    return substrings;
  }
  
  // Example usage:
  console.log(getConsecutiveSubstrings('abc')); // Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
  console.log(getConsecutiveSubstrings('a'));   // Output: ['a']
  console.log(getConsecutiveSubstrings(''));    // Output: []
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


