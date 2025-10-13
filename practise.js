//1
function reverseStr(str){
  return str.split('').reverse().join('');
}
console.log(reverseStr('hello'))

//2
function checkPalindrome(str){
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(checkPalindrome('madam'))
//4
function capitalizeFirst(str){
  return str.split(' ').map(el => el.charAt(0).toUpperCase()+el.slice(1)).join(' ');
}
console.log(capitalizeFirst('hello world'))
//3
function countVowels(str){
  let count = 0;
  let vowels = 'aeiouAEIOU';
  for(let i=0; i< str.length; i++){
    if(vowels.includes(str[i])){
      count++;
    }
  }
  return count;
}
console.log(countVowels('javascript'));
//5
function removeSpaces(str){
  return str.replace(/ /g,'');
}
console.log(removeSpaces('a b c'));
//6
function replaceWord(str){
  return str.replace('like','love');
}
console.log(replaceWord('l like js'));
//7
function largestNum(arr){
  let largest = arr[0];
  for(let i =0; i<arr.length; i++){
    if(arr[i] > largest){
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestNum([1,2,-8,9]));
//8
function sum(arr){
 return arr.reduce((acc,curr) => acc+curr,0)
  }
  console.log(sum([2,4,-4,2]));
//9
function avg(arr){
  if(arr.length === 0) return 0;

  const sum = arr.reduce((acc,curr) => acc+curr,0);
  const average = sum / arr.length;

  return average;
}
console.log(avg([2,5,8]));
//10
let arr = [2,6,8,6,-2,-9,-24];
function countPositiveNegative(arr){
  let positive = arr.filter(n => n > 0);
  let negative = arr.filter(n => n < 0);
  
  return{positive,negative};
}
let result = countPositiveNegative(arr)
console.log(result.positive.length);
console.log(result.negative.length);

//11
function secondLargest(arr){
  let first = -Infinity;
  let second = -Infinity;

  for(let i = 0; i< arr.length; i++){
    if(arr[i] > first){
      second = first;
      first = arr[i];
    }else if (arr[i] > second && arr[i] !== first){
      second = arr[i]
    }
  }
  return second;
}
console.log(secondLargest([-1,-2,-3,-4]))
//12
function removeDuplication(arr){
return arr.filter((item,index) => arr.indexOf(item) === index);
}
console.log(removeDuplication([2,4,6,2,1,4,6,0]));

//13
function sortAcenting(arr){
for(let i =0; i< arr.length; i++){
  for(let j = 0; j< arr.length; j++){
    if(arr[i] > arr[j]){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
return arr;
}
console.log(sortAcenting([2,4,7,-1]));

//14
function evenOdd(arr){
  let even = arr.filter(n => n % 2 === 0);
  let odd = arr.filter(n => n % 2 !== 0);
  return {even,odd};
}
console.log(evenOdd([2,4,1,46,6,3]));