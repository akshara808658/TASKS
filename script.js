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
console.log(avgNum([2,5,5]))

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
// //
// function accending(arr, i = arr.length-1){
//   if(i === 0) return true
//  for(let i=0; i< arr.length; i++){
//   if(arr[i] < arr[i-1]){
//     return false;
//   }
//  }
//  return accending(arr, i-1);
// }
// console.log(accending([2,5,7,5,4]));

// //sort array
// function sortArray(arr){
// for(let i =0; i< arr.length-1; i++){
//   for(let j =0; j< arr.length-i-1; j++){
//    if(arr[j] > arr[j+1]){
//     let temp = arr[j];
//     arr[j] = arr[j+1];
//     arr[j+1] = temp;
//    }
//   }
// }
// return arr;
// }
// console.log(sortArray([5,0,5,7,1]));

// //all even numbers
// const n1 = [1,3,4,-8,12,5,0];

// const even = n1.filter(n => n%2 !== 0);
// console.log(even);

// //
// const arr1 =[1,2,3];
// // const reversed = arr1.reverse();
// // console.log(reversed);

// const reve = [];
// for(let i = arr1.length-1; i >= 0; i--){
//   reve.push(arr1[i]);
// }
// console.log(reve);
// /*
//  * Merge two arrays and remove duplicates.

// Check if two arrays are equal.

// Rotate an array by n positions.

// Convert a sentence into “Title Case”: 'hello world from js' → 'Hello World From Js'

// Find the longest word in a string.

// Count the number of words in a string.

// Flatten a nested array: [1, [2, 3], [4, [5]]] → [1, 2, 3, 4, 5]
// */
// //
// const array1 = [1,4,6];
// const array2 = [2,4,5];

// const merge = [...new Set([...array1,...array2])];
// console.log(merge);

// //
// function equal(arr1,arr2){
//   if(arr1.length !== arr2.length) return false;

//   for(let i = 0; i< arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//       return false
//     }
//   }
//   return true;
// }
// console.log(equal([1,2,3],[1,2,3]));
// console.log(equal([1,2,3],[1,5,3]));

// //Rotate an array by n positions.
// function rotateArray(arr,n){
//   const len = arr.length;
//   n = n % len;
//   return arr.slice(n).concat(arr.slice(0,n));
// }
// console.log(rotateArray([1,2,3,4,5],2));

// //
// function capitalF(str){
//   return str.split(' ').map(e => e.charAt(0).toUpperCase()+ e.slice(1)).join(' ');
// }
// console.log(capitalF('hello world from js'));

// //
// const array = ['apple','banana','pinapple'];
// let longest = '';
// for(let i = 0; i <array.length; i++){
//   if(array[i].length > longest.length){
//     longest = array[i];
//   }
// }
// console.log(longest);

// //
// function findLongestWord(str){
//   const words = str.split(' ');
//   let longest = '';

//   for(let word of words){
//     if(word.length > longest.length){
//       longest = word;
//     }
//   }
//   return longest;
// }
// console.log(findLongestWord('I love javascript programming'))

//------------------------------------------------------------------------------------------------
// let a = 10;
// let b = 20;

// let c = a;
// a = b;
// b = c;

// console.log(a,b);

//
function large(arr){
   let largeNum = arr[0];
   for(let i =0; i< arr.length; i++){
      if(arr[i] > largeNum){
         largeNum = arr[i];
      }
   }
   return largeNum;
}
console.log(large([2,4,6]))

//
function secondLarge1(arr){
   let large = -Infinity;
   let small = -Infinity;

   for(let i=0; i< arr.length; i++){
      if(arr[i] > large){
         second = large
         large = arr[i]
      }else if (arr[i] > second && arr[i] !== large){
         second = arr[i]
      }
   }
   return second;
}
console.log(secondLarge1([-4,-5,-7,98]));

//
function findSmallest(arr){
   let smallest = Infinity;
   for(let i=0; i< arr.length; i++){
      if(arr[i] < smallest){
         smallest = arr[i];
      }
   }
   return smallest;
}
console.log(findSmallest([5,2,9,1,7]))

//second smallest number
function secondSmallest(arr){
   let smallest = Infinity;
   let secondSmall = Infinity;

   for(let i=0; i< arr.length; i++){
      if(arr[i] < smallest){
         secondSmall = smallest;
         smallest = arr[i];
      }else if(arr[i] < secondSmall && arr[i] !== smallest){
         secondSmall = arr[i];
      }
   }
   return secondSmall;
}
console.log(secondSmallest([5,2,9,1,7]));

//
function countVowels(arr){
   let count = 0;
   let vowels = 'aeiouAEIOU'

   for(let i=0; i< arr.length; i++){
      if(vowels.includes(arr[i])){
         count++;
      }
   }
   return count;
}
console.log(countVowels('Javascript'))

//
function reverseEachWord(str){
   return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}
console.log(reverseEachWord('hello world'))

//
function flatten(arr){
  return arr.flat(Infinity)
}
console.log(flatten([1,[2,3],[4,[5]]]));

//
function flattenwithout(arr){
   let result = [];
   for(let i =0; i< arr.length; i++){
      if(Array.isArray(arr[i])){
         result = result.concat(flattenwithout(arr[i])); 
      }else{
         result.push(arr[i])
      }
   }
   return result;
}
console.log(flattenwithout([1,[2,3],[4,[5]]]));

//
function findLongest(str){
   let longest = ''
  let words =  str.split(' ');
  for(let i=0; i< words.length;i++){
   if(words[i].length > longest.length){
      longest = words[i]
   }
  }
  return longest;
}
console.log(findLongest('i love javascript'))

//
function countVowelWords(str){
   let count =0;
   let word = str.split(' ');
   let vowel = 'aeiouAEIOU';

   for(let i=0; i< word.length; i++){
      if(vowel.includes(word[i].charAt(0))){
         count++;
      }
   }
   return count;
}
console.log(countVowelWords('i love apple and orange'));

//
function sorting(arr){
  let second =  arr.sort((a,b) => a-b);
  return second[1]
}
console.log(sorting([2,4,6]));

//
function filterLongerWords(str,n){
   let result = [];
   let word = str.split(' ');
   
   for(let i=0; i< word.length; i++){
    if(word[i].length > n){
     result.push(word[i]);
    }
   }
   return result;
}
console.log(filterLongerWords('I love javascript and coding', 4))

//
function reverseSentence(str){
   return str.split(' ').reverse().join(' ')
}
console.log(reverseSentence('I Love Javascript'));

//
function vowelsInWords(str){
   let word = str.split(' ');
   let result =[];
   let vowel = 'aeiouAEIOU';
   
   for(let i=0; i< word.length; i++){
      let count =0
      for(let j=0; j< word[i].length; j++){
           if(vowel.includes(word[i][j])){
              count ++;
          }
      }
     result.push(count)
   }
   return result;
}
console.log(vowelsInWords('I Love Javascript'));

//
function wordWithTwoVowels(str){
   let word = str.split(' ');
   let vowel = 'aeiouAEIOU';
   let result =[];

   for(let i=0; i< word.length; i++){
      let count =0;
      for(let j=0; j< word[i].length; j++){
         if(vowel.includes(word[i][j])){
            count++;
         }
      }
      if(count >= 2){
         result.push(word[i])
      }
   }
   return result;
}
console.log(wordWithTwoVowels('I Love Javascript '))
//
function reverseSentence(str){
   return str.split('').reverse().join('');
}
console.log(reverseSentence('Hello world'));

//
function longestWord(str){
   let longest  = '';
   let word = str.split(' ');

   for(let i = 0; i< word.length; i++){
      if(word[i].length > longest.length){
         longest = word[i];
      }
   }
   return longest;
}
console.log(longestWord('i like javascript'));

/**
  String & Array Assessment

1-Reverse Words: Reverse each word in a sentence but keep the word order the same.

   Input: "Hello World" → Output: "olleH dlroW"

2- Longest Word: Find the longest word in a sentence.

  Input: "I love JavaScript" → Output: "JavaScript"

3- Count Words: Count the number of words in a string.

   Input: "Practice makes perfect" → Output: 3

4- Count Vowels: Count total vowels in a string.

   Input: "Javascript" → Output: 3

5-Vowels in Each Word: Return an array of vowel counts for each word.

   Input: "I love Javascript" → Output: [1, 2, 3]

6-Words With ≥2 Vowels: Return words containing at least 2 vowels.

   Input: "I Love Javascript and coding" → Output: ["Love", "Javascript", "and", "coding"]

7-Reverse Sentence: Reverse the order of words in a sentence (words themselves not reversed).

  Input: "I Love Javascript" → Output: "Javascript Love I"

8-Filter Long Words: Return an array of words longer than n characters.

   Input: "I love JavaScript and coding", n = 4 → Output: ["JavaScript", "coding"]

9-Second Largest Number: Find the second largest number in an array.

  Input: [2, 4, 6, 1] → Output: 4

10-Rotate Array by n Positions: Rotate array elements by n.

  Input: [1, 2, 3, 4, 5], n = 2 → Output: [3, 4, 5, 1, 2]
 */
//------------------------------------------------------------------------------------------------------------
//1
function reverseString(str){
   return str.split('').reverse().join('');
}
console.log(reverseString('Hello World'));

//2
function longestWord(str){
   let longest = '';
   let word = str.split(' ');

   for(let i=0;i< word.length; i++){
      if(word[i].length > longest.length){
         longest = word[i];
      }
   }
   return longest;
}
console.log(longestWord('I Love Javascript'));

//3
function countNumWord(str){
   let word = str.split(' ');
   let count = 0;

   for(let i=0; i< word.length; i++){
     if(word[i].length > count){
      count++;
     }
   }
   return count;
}
console.log(countNumWord('I Love Javascript'));

//4
function countTotalVowels(str){
   let count = 0;
   let vowel = 'aeiouAEIOU';
   let word = str.split('')

   for(let i=0; i< word.length; i++){
      if(vowel.includes(word[i])){
         count++;
      }
   }
   return count;
}
console.log(countTotalVowels('Practise make perfect'));

//5
function eachWordVowels(str){
   let result = [];
   let vowels = 'aeiouAEIOU';
   let word = str.split(' ');

   for(let i = 0; i< word.length; i++){
      let count = 0;
      for(let j = 0; j< word[i].length; j++){
         if(vowels.includes(word[i][j])){
            count++;
         }
      }
      result.push(count)
   }
   return result;
}
console.log(eachWordVowels('I Love Javascript'));

//6
function vowelGreaterTwo(str){
   let vowel = 'aeiouAEIOU';
   let word = str.split(' ');
   let result = [];

   for(let i=0; i< word.length; i++){
      let count = 0;
      for(let j = 0; j< word[i].length; j++){
         if(vowel.includes(word[i][j])){
            count++;
         }
      }
      if(count >= 2){
         result.push(word[i])
      }
   }
   return result;
}
console.log(vowelGreaterTwo('I Love Javascript'));

//7
function reverseWord(str){
   return str.split(' ').reverse().join(' ');
}
console.log(reverseWord('I Love Javascript'));
//8
function reverseNum(str,n){
   let result =[];
   let word = str.split(' ')
   
   for(let i=0; i<word.length; i++){
    if(word[i].length >= n){
      result.push(word[i])
    }   
   }
   return result;
}
console.log(reverseNum('I Love Javascript',4))
//9
function secondLargest(arr){
   let firstLarge = arr[0];
   let secondLarge = arr[0];

   for(let i=0; i< arr.length; i++){
      if(arr[i] > firstLarge){
         secondLarge = firstLarge;
         firstLarge = arr[i];
      }else if(arr[i] > secondLarge && arr[i] !== firstLarge){
         secondLarge = arr[i];
      }
   }
   return secondLarge;
}
console.log(secondLargest([-2,-4,6,-1,-1,6]));
//

//10
// function rotateByNum(arr,n){
//   n = n % arr.length;
//   let rotate = arr.slice(n).concat(arr.slice(0,n));
//   return rotate;
// }
// console.log(rotateByNum([1,2,3,4,5],8));

// //

// const array = [10,20,30,40];
// function isElementExist(arr,num){
//    for(let i=0; i< arr.length; i++){
//       if(arr[i] === num) return i;
//    }
//    return -1
// }
// console.log(isElementExist(array,30));
// //third largest 
// function thirdLargest(arr){
// let first  = -Infinity;
// let second = -Infinity;
// let third = -Infinity;

// for(let i=0; i< arr.length; i++){
//    if(arr[i] > first){
//       third = second;
//       second = first;
//       first = arr[i];
//    }else if (arr[i] > second && arr[i] !== first){
//       second = arr[i];
//    }else if (arr[i] > third && arr[i] !== second){
//       third = arr[i]
//    }
// }
// return third
// }
// console.log(thirdLargest([1,2,3,4,5,9]))
// //
// let f = 10;
// let s = 30;

// let v = f;
// f= s;
// s = v;

// console.log(f,s)
// //
// function rotate(arr){
//    let last = arr[arr.length-1];
//    for(let i =arr.length-1; i> 0; i--){
//       arr[i] = arr[i-1];
//    }
//    arr[0] = last;
//    return arr
// }
// console.log(rotate([1,2,3,4]))
// //
// function rotateByN(arr,n){
// return arr.slice(n).concat(arr.slice(0,n));
// }
// console.log(rotateByN([1,2,4,5],1))
// //
// function recursiveBubbleSort(arr, n = arr.length) {
//   if (n === 1) return arr; // Base case
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap
//     }
//   }
//   return recursiveBubbleSort(arr, n - 1); // Recursive call
// }
// console.log(recursiveBubbleSort([2,1,5,5,6]))

//---------------------------------------------------
//1-count consonants in a string
function findConsonants(str){
   let vowel = 'aeiouAEIOU';
   let count = 0;

   for(let i = 0; i < str.length; i++){
      if(vowel.includes(str[i])){
         count++;
      }
   }
   //split letters
   let letterCount = str.split('').filter(c => /[a-zA-Z]/.test(c)).length;
   return letterCount - count;
}
console.log(findConsonants('Javascript5'));

//2-remove all non-alphabet characters from a string
function removeNonAlphabets(str){
  return str.split(' ').filter(a => /[a-zA-Z]/.test(a)).join(' ')
}
console.log(removeNonAlphabets('Hello 123 World'));

//3-check if a string contains only unique characters 
function checkUniqueChar(str){
   const uniqueCharas = [...new Set(str)];
   return uniqueCharas.length === str.length;
}
console.log(checkUniqueChar('hello'));

//4-find all palindromic words in  a sentence
function palindromeSentence(str){
   let palindromeWords = [];
   let words = str.split(' ');
   
   for(let i=0; i< words.length; i++){
    let reversed = words[i].split('').reverse().join('')
    if(reversed === words[i]){
      palindromeWords.push(words[i]);
    }
   }
return palindromeWords;
}
console.log(palindromeSentence('madam racecar apple'));

//5-merge two arrays and sort in decesending order 
function mergeAndDecending(arr1,arr2){
   const arrays = [...arr1,...arr2];

   for(let i =0; i< arrays.length-1; i++){
      for(let j=0; j< arrays.length-i-1; j++){
         if(arrays[j] < arrays[j+1]){
            let temp = arrays[j];
            arrays[j] = arrays[j+1];
            arrays[j+1] = temp;
         }
      }
   }
   return arrays;
}
console.log(mergeAndDecending([1,3,5],[2,4,6]));

//6-find sum of even numbers in an array
function sumOfEven(arr){
   let sum = 0;
   for(let i = 0; i< arr.length; i++){
      if(arr[i] % 2 === 0){
         sum += arr[i];
      }
   }
   return sum;
}
console.log(sumOfEven([1,2,3,4,5,6]))

//7-remove falsy values from an array
function falsyValues(arr){
   return arr.filter(Boolean);
}
console.log(falsyValues([0,1,false,2,'',3,null,undefined,4]))

//8-find intersection of 2 arrays
function intersectionOfNum(arr1,arr2){
 return arr1.filter(el => arr2.includes(el));
}
console.log(intersectionOfNum([1,2,4,5],[2,4,7,8]));
//9-check if an array is a palindrome
function checkArrayIsPalindrome(arr){
   let reversed = [...arr].reverse();
   return arr.join(',') === reversed.join(',');
}
console.log(checkArrayIsPalindrome([1,2,3,2,1]))
console.log(checkArrayIsPalindrome([1,2,3,4,1]))
//10-move all zeros to the end of an array
function moveAllZeroToEnd(arr){
  const nonZero = arr.filter(el => el !== 0);

  const zeros = new Array(arr.length - nonZero.length).fill(0);

  return nonZero.concat(zeros);
}
console.log(moveAllZeroToEnd([0,2,4,0,4,6]));

//11-second smallest number
function secondSmallestNum(arr){
   let firstSmallest = arr[0];
   let secondSmallest = arr[0];

   for(let i = 0; i< arr.length; i++){
      if(arr[i] < firstSmallest){
         secondSmallest = firstSmallest;
         firstSmallest = arr[i];
      }else if (arr[i]< secondSmallest && arr[i]  !== firstSmallest){
         secondSmallest = arr[i];
      }
   }
   return secondSmallest;
}
console.log(secondSmallest([5,2,9,1,7]));

//12-find all primeNumber
function primeNum(num){
   if(num < 2) return false;
   for(let i = 2; i <= Math.sqrt(num);i++){
      if(num % 2 === 0) return false;
   }
   return true;
}
function primeNumbers(arr){
   return arr.filter(primeNum);
}
console.log(primeNumbers([2,3,4,5,6,7,8,9]));

//remove duplication from array
function removeDuplication(arr){
   let removedArray = [...new Set(arr)];
   return removedArray;
}
console.log(removeDuplication([1,3,5,2,1]));

//pattern printing problem
let n = 5;
for (let i = 0; i< n; i++){
  let row =''
  for(let j = 0; j < n; j++){
    row = row + '*'

  }
  console.log(row)
}
//
for(let i = 0; i< n; i++){
  let row = '';
  for(let j = 0; j <= i; j++){
    row = row + (j+1)
  }
  console.log(row);
}

// 
for (let i = 0; i< n; i++){
  let row =''
  for(let k = 0; k < n-(i+1); k++){
    row = row + '_'
  }
  for(let j =0; j <= i; j++){
  row = row + '*'
 }
  console.log(row)
}
//pyramid
for(let i =0; i< n; i++){
  let row = '';
  for(let k = 0; k < n-(i+1); k++){
    row += ' ';
  }
  for(j = 0; j<=i; j++){
    row += (j+1) + ' '
  }
  console.log(row)
};
//reverse number pyramid
for(let  i= 0; i<n; i++){
  let row = '';
  for(let j =n-(i+1); j >=0 ; j--){
    row += (j+1) + ' '
  }
  console.log(row)
};
