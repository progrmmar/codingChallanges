/*
    Challange Name: isVowelBalance.
    description: Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half
    Coder: Arjun Roy
    Challange Date: August 11, 2025
    Solution Date: February 6, 2026
*/

/*
    i. The string can contain any characters.
   ii. The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
  iii. If there's an odd number of characters in the string, ignore the center character.
*/

const isBalanced = str => {
    let middleIndex = 0;

    let firstHalf = [];
    let lastHalf = [];

    if (str.length % 2 !== 0) {
        middleIndex = (str.length + 1) / 2;
        firstHalf = str.slice(0, middleIndex - 1).split("");
        lastHalf = str.slice(middleIndex).split("");
    } else {
        middleIndex = str.length / 2;
        firstHalf = str.slice(0, middleIndex).split("");
        lastHalf = str.slice(middleIndex).split("");
    }

    const vowels = "aeiou";

    firstHalf = firstHalf.filter(char => vowels.includes(char.toLowerCase()));
    lastHalf = lastHalf.filter(char => vowels.includes(char.toLowerCase()));

    return firstHalf.length === lastHalf.length;
};

// console.log(isBalanced("racecar")); // true
// console.log(isBalanced("Lorem Ipsum")); // true
// console.log(isBalanced("Kitty Ipsum")); // false
// console.log(isBalanced("string")); // false
// console.log(isBalanced(" ")); // true
