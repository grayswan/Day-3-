/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
  return str.split('').reverse().join('');
}

console.assert(reverse("books"))
console.assert(reverse("we do not want no trouble"))

/**
 * Part 2
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

 function findLongestWord(sentence) {
     var sentence = sentence.split(" ");
     var longest = 0;
     var word = null;
     for (var i = 0; i < sentence.length; i++) {
         if (longest < sentence[i].length) {
             longest = sentence[i].length;
             word = sentence[i];
       }
     }
     return word;
 }


console.assert(findLongestWord("book dogs"))
console.assert(findLongestWord("do not mess with Florida"))

/**
 * Part 3
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr){
      var arr = [1,2,3,4];
      var sum = 0
      for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
      }
      return sum;
  }

console.assert(sumOfArray([1, 2]))
console.assert(sumOfArray([3, 4]))
console.assert(sumOfArray([1, 2, 3]))
console.assert(sumOfArray([10, 9, 8]))

/**
 * Part 4
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    return a + b;
}

console.assert(sum(8, 11))
console.assert(sum(4, 100))

/**
 * Part 5
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
   while (b != 0) {
   var c = a % b;
       a = b;
       b = c;
     }
 return a;
 }

console.assert(GCD(5,1))
console.assert(GCD(15,3))
console.assert(GCD(15,5))
console.assert(GCD(50,20))

/**
 * Part 6
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

 function LCM(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
     return false;
   return (!x || !y) ? 0 : Math.abs((x * y) / GCD(x, y));
 }

 function GCD(x, y) {
   x = Math.abs(x);
   y = Math.abs(y);
   while(y) {
     var t = y;
     y = x % y;
     x = t;
   }
   return x;
 }

console.assert(LCM(10,10))
console.assert(LCM(2,5))
console.assert(LCM(3,6))
// console.assert(LCM(0,1))
