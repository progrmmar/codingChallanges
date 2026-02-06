/*
    Challange Name: checkBase.
    description: Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.
    Coder: Arjun Roy
    Challange Date: August 12, 2025
    Solution Date: February 6, 2026
*/

/*
    1. The string may contain integers, and uppercase or lowercase characters.
    2. The check should be case-insensitive.
    3. The base can be any number 2-36.
    4. A number is valid if every character is a valid digit in the given base.
    5. Example of valid digits for bases:
        i. Base 2: 0-1
       ii. Base 8: 0-7
      iii. Base 10: 0-9
       iv. Base 16: 0-9 and A-F
        v. Base 36: 0-9 and A-Z
*/

const isValidNumber = (number, base) => {
    const letters = "abcdefghijklmnpqrstuvwxyz";

    const numberArr = number.split("");

    if (base === 2) {
        return numberArr.every(num => {
            return Number(num) >= 0 && Number(num) <= 1; // && (!letters.includes(num))
        });
    } else if (base === 8) {
        return numberArr.every(num => {
            return Number(num) >= 0 && Number(num) <= 7; // && (!letters.includes(num))
        });
    } else if (base === 10) {
        return numberArr.every(num => {
            return Number(num) >= 0 && Number(num) <= 9;
        });
    } else if (base === 16) {
        const hexLetter = letters.slice(0, 6);

        return numberArr.every(num => {
            return (
                (Number(num) >= 0 && Number(num) <= 9) ||
                hexLetter.includes(num.toLowerCase())
            );
        });
    } else if (base <= 36) {
        return numberArr.every(num => {
            return (
                (Number(num) >= 0 && Number(num) <= 9) ||
                letters.includes(num.toLowerCase())
            );
        });
    }
};

// console.log(isValidNumber("01010", 2)); // true
// console.log(isValidNumber("012102", 2)); // false
// console.log(isValidNumber("76543210", 8)); // true
// console.log(isValidNumber("9876543210", 8)); // false
// console.log(isValidNumber("5G3F8F", 17)); // true
