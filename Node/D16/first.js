// console.log("Hello");

const _ = require("lodash");

const numbers  = [1,2,3,4,5,6,7,8,9];
console.log(_.chunk(numbers, 2))
console.log(_.reverse(numbers))
console.log(_.without(numbers, 3))
console.log(_.shuffle(numbers))
console.log(_.last(numbers))
console.log(_.first(numbers))
console.log(_.nth(numbers, 2))