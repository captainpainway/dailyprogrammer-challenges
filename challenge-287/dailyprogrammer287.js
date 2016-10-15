// https://www.reddit.com/r/dailyprogrammer/comments/56tbds/20161010_challenge_287_easy_kaprekars_routine/

"use strict";

function toArray(num) {
    let arr = (""+num).split('');
    arr.length < 4 && arr.unshift('0'); // Add leading zeros
    return arr;
}

function largest_digit(num) {
    return Math.max(...toArray(num));
}

function desc_digits(num) {
    return parseInt(toArray(num).sort((a, b) => { return b - a }).join(''), 10);
}

function asc_digits(num) {
    return parseInt(toArray(num).sort((a, b) => { return a - b }).join(''), 10);
}

function kaprekar(num) {
    let count = 0, x = num;
    while (x !== 6174) {
        x = desc_digits(x) - asc_digits(x);
        count++;
    }
    return count;
}

console.log(largest_digit(1234));
console.log(largest_digit(3253));
console.log(largest_digit(9800));
console.log(largest_digit(3333));
console.log(largest_digit(120));

console.log(desc_digits(1234));
console.log(desc_digits(3253));
console.log(desc_digits(9800));
console.log(desc_digits(3333));
console.log(desc_digits(120));

console.log(kaprekar(6589));
console.log(kaprekar(5455));
console.log(kaprekar(6174));
