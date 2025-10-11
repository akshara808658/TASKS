/** str method

 *1-Reverse a string: 'hello' → 'olleh'

 2- Check if a string is a palindrome: 'madam' → true

 3-Count the number of vowels in a string.

 4-Capitalize the first letter of each word: 'hello world' → 'Hello World'

 5-Remove all spaces from a string: 'a b c' → 'abc'

 6-Replace all occurrences of a word in a string: 'I like JS' → 'I love JS'

 7-Reverse each word in a string: 'hello world' → 'olleh dlrow'
*/
//1
function reverseStr(str){
 return str.split('').reverse().join('');
}
console.log(reverseStr('hello'));

//2
function palindrome(str){
  let reversed =  str.split(' ').reverse().join(' ');
  return reversed === str;
}
console.log(palindrome('madam'))

//4
function capitalize(str){
  return str.split(' ').map(e => e.charAt(0).toUpperCase()+ e.slice(1)).join(' ');
}
console.log(capitalize('hello world'));

//5
function removeSpace(str){
  return str.replace(/ /g,'');
}
console.log(removeSpace('a b c'))

//3
function countVowels(str){
  let count = 0;
  let vowels = 'aeiouAEIOU';

  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      count++;
    }
  }
  return count;
}
console.log(countVowels('javascript'));

//6
const replaceWord = 'I like JS'
function replace(str){
  return str.replace('like','Love');
}
console.log(replace(replaceWord));

//7
function reverseEach(str){
  return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}
console.log(reverseEach('hello world'));

//Array Method---------------------
/**
* 8-Find the largest number in an array: [1, -23, 5] → 5

 9-Find the smallest number in an array.

 10-Find the sum of all numbers in an array.

11-Find the average of numbers in an array.

12-Count the number of positive and negative numbers in an array.

13-Find the second largest number in an array.

14-Remove duplicate numbers from an array.

15-Sort an array in ascending order without using .sort().

16-Find all even numbers in an array.

17-Find all odd numbers in an array.
*/
//8
function largestNum(arr){
 let largest = arr[0]
 for(let i=0; i< arr.length; i++){
  if(arr[i] > largest){
    largest = arr[i];
  }
 }
 return largest;
}
console.log(largestNum([1,5,9]));

//9
function smallestNum(arr){
  let smallest = arr[0];
  for(let i=0; i< arr.length; i++){
    if(arr[i]< smallest){
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(smallestNum([3,5,-2]))

//10
function sum(arr){
  return arr.reduce((acc,curr) => acc+curr,0);
}
console.log(sum([2,4,6]));

//11
function avgNum(arr){
  if(arr.length === 0) return 0 ;

  const sums = arr.reduce((acc,curr) => acc+curr, 0);
  const avg = sums / arr.length;

  return avg;
}
console.log(avgNum([]))

//12
const numbers = [1,3,-2,56,-3,9,45,46];
const positive = numbers.filter(n => n > 0);
const negative = numbers.filter(n => n< 0);

console.log(positive.length);
console.log(negative.length);

//13
numbers.sort((a,b) => b-a);
const secondLarge = numbers[1];
console.log(secondLarge);

//14
function newArray(arr){
  return [...new Set(arr)];
}
console.log(newArray([2,4,2,5,7,5]))
//OR
function getUnique(arr){
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(getUnique([2,4,2,5,7,5]))

//15
function evenAndOdd(arr){
  const even = arr.filter(n => n % 2 === 0 );
  const odd = arr.filter(n => n % 2 !== 0 );
return[even, odd];
}
console.log(evenAndOdd([2,4,6,3,6,1,7]));

//-------------------------------------------------
/**
 *16- Reverse an array: [1, 2, 3] → [3, 2, 1]

17-Merge two arrays and remove duplicates.

18-Check if two arrays are equal.

19-Rotate an array by n positions.

20-Convert a sentence into “Title Case”: 'hello world from js' → 'Hello World From Js'

21-Find the longest word in a string.

22-Count the number of words in a string.

23-Flatten a nested array: [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5]
*/
//16
function reverseArray(arr){
  return arr.reverse()
}
console.log(reverseArray([1,2,3]));

//17
const a = [2,3,5];
const b = [3,5,9,0];

const together = [...new Set([...a,...b])];
console.log(together);

//18
function equal(arr1,arr2){
  if(arr1.length !== arr2.length) return false;

  for(let i=0; i< arr1.length; i++){
   if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}
console.log(equal([1,2,3],[1,2,3]))
console.log(equal([1,2,3],[1,2,3,4]));

//19
function rotate(arr,n){
  const leng = arr.length;
  n = n % leng;

  return arr.slice(n).concat(arr.slice(0,n));
}
console.log(rotate([1,2,3,4,5],3));

//20
function capFirst(str){
  return str.split(' ').map(w => w.charAt(0).toUpperCase()+ w.slice(1)).join(' ')
}
console.log(capFirst('hello world from js'));

//21
function longest(arr){
  let longest = '';
  for(let i=0; i< arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i]
    }
  }
  return longest;
}
console.log(longest(['HTML','JAVASCRIPT','CSS']));

//22
const str= 'I love Javascript';
function count(str){
  return str.trim().split(/\s+/).length
}
console.log(count(str))

//23
function flattenArray(arr){
  return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, 3], [4, [5]]]))
//by recursive
function flattenRecursive(arr){
  let result = [];
 for(let el of arr){
  if(Array.isArray(el)){
    result = result.concat(flattenRecursive(el))
  }else{
    result.push(el);
  }
 }
 return result;
}
console.log(flattenRecursive([1, [2, 3], [4, [5]]]))
