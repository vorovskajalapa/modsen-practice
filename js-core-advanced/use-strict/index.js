"use strict";


const countVowels = (string) => {
  let count = 0;
  const vowels = "aeyuo"

  for (let ch of string.toLowerCase()) {
    if (vowels.includes(ch)) {
      count += 1;

    }
  }
  return count;
}

console.log(countVowels("Hello World"));