/*
    Challange Name: checkBase.
    description: Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.
    Coder: Arjun Roy
    Challange Date: August 13, 2025
    Solution Date: February 11, 2026
*/
/* guides :
      1. This function takes a string. Ex: "My name is Arjun"
      2. Then It will return that string with all uppercase letter and each character is double spaced. Ex: "M  Y  N  A  M  E I  S  A  R  J  U  N"
      3. Both side of the string spaced should be trimmed
*/
const spaceJam = string => {
  return string.trim().split("").filter(char => char !== " ").join("  ").toUpperCase();
}

// console.log(spaceJam("Hello world!")) // H  E  L  L  O  W  O  R  L  D  !
// console.log(spaceJam("Arjun Roy")) // A  R  J  U  N  R  O  Y