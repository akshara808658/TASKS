
// /*
// //RECURSION
// /**
//  * a function that call itself 
//  * without a base case recursion never stop
//  * that leads infinte loop and eventually a stack overflow
// */
// //Eg
// //1-Factorial
// function factorial(n){

//   if(n === 0) return 1
//   return  n * factorial(n-1);
  
// }
// console.log(factorial(6));
//using for loop
// function fact(n){
//   let result =1;
//   for(let i=1; i<=1; i++){
//     result *= i
//   }
//   return result
// }
// console.log(fact(3));

// //in here first return 6 * factorial(5) then again move to function then return 5 * factorial(4).... last 1 * factorial(0) that is 1 so we get --> 6*5*4*3*2*1 = 720

// //2-Sum of no.s from 1 to n
// function sum(n){
//   if(n === 0) return 0;
//   return n + sum (n-1);
// }
// console.log(sum(6));

// //3-Fibunacci sequence
// function fibunacci(n){
//   if(n <= 1) return n;
//   return fibunacci(n-1) + fibunacci(n-2);
// }
// console.log(fibunacci(6));
// //we know F(0) = 0, F(1) = 1, n=6 then fib(6) -> fub(5)+fib(4) , fib(5)-> fib(4)+fib(3) so put in fub(5) we get -> fib(4)+fib(3)+fib(4) then fib(4) = fib(3) +fib(2) --> fib(3)+fib(2)+fib(3)+fib(2)+fib(3) ---> fib(3) = fib(2)+fib(1)-->fib(2)+fib(1)+fib(2)+fib(2)+fib(1)+fib(2)+fib(2)+fib(1)--> fib(2) = fib(1)+fib(0)==> 1+0 = 1 so result is 1 in 8 times ===>fib(6)= 8


// //ARRAYS RECURSION
// //find sum
// function sumArray (arr,i=0){
//   if(i === arr.length) return 0;
//   return arr[i]+sumArray(arr,i+1);
// }
// console.log(sumArray([1,2,3,4]));

// //find max
// function maxArray(arr, i=0){
//   if(i === arr.length-1) return arr[i];
//   return Math.max(arr[i],maxArray(arr,i+1))
// }


// //STRING RECURSION
// function reverse(str){
//   if(str === "") return "";
//   return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse("hello"));

// //check palindrome
// function isPalindrome(str){
//   if(str.length <= 1) return true; // 1 or ""
//   if(str[0] !== str[str.length-1]) return false; //first char & last char
//   return isPalindrome(str.slice(1,-1))
// }
// console.log(isPalindrome("racecar"));

// //flatten 
// function flatten(arr, res =[]){
//   for(let el of arr){
//     if(Array.isArray(el)){
//       flatten(el,res)
//     }else{
//       res.push(el)
//     }
//   }
//   return res;
// }
// console.log(flatten([1,[2,[3,4],],5]));

// //Count digits of array
// function countDigits(n){
//   if(n<10) return 1
//   return 1 + countDigits(Math.floor(n/10));
// }
// console.log(countDigits(137654));

// //sum if digits of a number
// function sumDigits(n){
//   if(n === 0) return 0;
//   return (n % 10) + sumDigits(Math.floor(n/10));
// }
// console.log(sumDigits(1445));

//Sort an array usin for loop
// function isSorted(arr){
//  for(let i=1; i< arr.length; i++){
//   if(arr[i] < arr[i-1]){
//     return false;
//   }
//  }
//  return true;
// }
// console.log(isSorted(1,2,3,4)); 

// //sort array using recursion
// function isSorted(arr,i = arr.length-1){
//   if(i === 0) return true;
//   if(arr[i] < arr[i-1]) {
//     return false
//   }
//   return isSorted(arr, i-1);
// }

// console.log(isSorted([1,2,3,3,4]));
// console.log(isSorted([2,4,1,4,5]));

//OBJECT
let classObj = {
    "name" : "class A" ,
    "teacherName" : "Mary" ,
    "students" : [ 
        {
            "name" : "Ravi" ,
            "id" : "101" ,
            "marks" : [
                {"subject" : "English" , "mark" : 25}, 
                {"subject" : "Maths", "mark" : 48}, 
                {"subject" : "Physics", "mark" : 40}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 20}
            ]
        },
        {
            "name" : "Aju" ,
            "id" :  "102",
            "marks" : [
                {"subject" : "English" , "mark" : 35}, 
                {"subject" : "Maths", "mark" : 38}, 
                {"subject" : "Physics", "mark" : 33}, 
                {"subject" : "Chemistry", "mark" : 34},
                {"subject" : "Computer", "mark" : 30}
            ]
        },
        {
            "name" : "Mini SS" ,
            "id" : "103" ,
            "marks" : [
                {"subject" : "English" , "mark" : 12}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 18}, 
                {"subject" : "Chemistry", "mark" : 30},
                {"subject" : "Computer", "mark" : 40}
            ]
        },
        {
            "name" : "Binu" ,
            "id" : "104" ,
            "marks" : [
                {"subject" : "English" , "mark" : 49}, 
                {"subject" : "Maths", "mark" : 49}, 
                {"subject" : "Physics", "mark" : 47}, 
                {"subject" : "Chemistry", "mark" : 46},
                {"subject" : "Computer", "mark" : 50}
            ]
        }
    ]
}
console.log('----1---')
//1-print class
function printClassName(){
  console.log(classObj.name)
}
printClassName();
//2-print name
console.log('----2---')
function printTeacherName(){
  console.log(classObj.teacherName)
}
printTeacherName();
//3-print all names of student
console.log('----3---')
function allStudents(){
    for(let names of classObj.students){
        console.log(names.name)
    }
}
allStudents()
//4-print all ID 's
console.log('----4---')
function allId(){
    for(let ids of classObj.students){
        console.log(ids.id)
    }
}
allId()
//5-print sub name of specfic student
console.log('----5---')
function subName(studentName){
    for(let student of classObj.students){
        if(student.name === studentName){
            for(let subject of student.marks){
                console.log(subject.subject)
            }
        }
    }
}
subName('Binu');

//6-marks of all sub
console.log('----6---')
function allSubMark(studentName){
    for(let student of classObj.students){
        if(student.name === studentName){
            console.log(`Marks of ${student.name}:`)
            for(let subject of student.marks){
                console.log(`${subject.subject} : ${subject.mark}`)
            }
        }
    }
     console.log('Student not found')
}
allSubMark('Ravi');
//7-avg marks, // 8-Total mark
console.log('---7,8-----')
function avgMark(studentName){
    for(let student of classObj.students){
        if(student.name === studentName){
            let total =0;
            for(let sub of student.marks){
                total += sub.mark;
            }
            console.log(`Total mark of ${student.name}: ${total}`)
            const average = total / student.marks.length
            console.log(`Average mark of ${student.name}: ${average}`);
            return;
        }
    }
    console.log('Student not found')
}
avgMark('Binu');

//9,10-total & avg of sub 
console.log('----9,10----')
function avgSub(subName){
    let total =0;
    let count =0
    for(let student of classObj.students){
        for(let sub of student.marks){
            if(sub.subject === subName){
                total += sub.mark
                count++;
            }
        }
    }
    console.log(`Total mark of ${subName}: ${total}`)
    if(count > 0){
        let average = total / count;
        console.log(`Average mark for ${subName} : ${average}`);
    }else{
        console.log(`${subName} not found`)
    }
}
avgSub('Maths')

//11-highest mark in specific sub
console.log('----11-----')
function highestMark(sub){
    let highest =0;
    let topStudent = [];
    for(let student of classObj.students){
        for(let subj of student.marks){
           if(subj.subject === sub){
              if(subj.mark > highest){
                highest=subj.mark;
                topStudent = [student.name]
              }else if (subj.mark === highest){
                 topStudent.push(student.name)
              }
           }
        }
    }
    console.log(`${topStudent.join(', ')} scored highest in ${sub}: ${highest}`)
}

highestMark('Maths');
highestMark('Chemistry')