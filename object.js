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
  classObj.students.map(stu => console.log(stu.name));
}
allStudents()
//OR
console.log('---OR---');
function allStudents(){
 classObj.students.forEach(stu => {
    console.log(stu.name)
 });
}
allStudents();
//4:-Write a function to print the IDs of all the students in the class.
console.log('---4----');
function allStudentId(){
    classObj.students.forEach(ids => console.log(ids.id));
}
allStudentId();
//5-Write a function to print the subject names for a specific student.
console.log('----5---')
function subName(student){
    classObj.students.forEach(el => {
        if(student === el.name){
        for(const sub of el.marks ){
            console.log(sub.subject)
        }
        }
    });
}
subName('Binu')

//6-Write a function to print the marks of a specific student in all subjects.
console.log('----6---')
function allSubMark(student){
  const foundStudent = classObj.students.find(el => el.name === student)

  if(foundStudent){
    console.log(`Mark of ${foundStudent.name}: -`)
    foundStudent.marks.forEach(sub => {
        console.log(`${sub.subject}: ${sub.mark}`)
    })
  }else{
    console.log('Student not found')
  }
}
allSubMark('Aju');

//7,8-Write a function to calculate and print the average marks & total for a specific student.
console.log('---7,8-----')
function avgMark(student){
    const foundStudent = classObj.students.find(el => el.name === student)

    if(foundStudent){
        let total = 0
        foundStudent.marks.forEach(sub => {
            total += sub.mark;
        })
        console.log(`Total Marks of ${foundStudent.name}:- ${total}`)
    const avg = total / foundStudent.marks.length
    console.log(`avg mark of  ${foundStudent.name}: ${avg}`)
    }else{
        console.log('Student not found')
    }
}
avgMark('Binu');

//9-Write a function to calculate and print the average marks & total for all students in a specific subject.
console.log('----9,10----')
function avgSubMark(sub){
    let total =0;
    let count =0;
    let allMarks = classObj.students.flatMap(stu => stu.marks)

    allMarks.forEach(el => {
        if(el.subject === sub){
            total += el.mark;
            count++;
        }
    })
    console.log(`Total mark of ${sub}: ${total}`)
    if(count > 0){
        let avg = total / count;
        console.log(`Average mark of ${sub}: ${avg}`)
    }else{
        console.log(`${sub} not found`)
    }
}
avgSubMark('Chemistry')

//11- Write a function to find and print the student with the highest marks in a specific subject.
console.log('----11-----')
function highestMark(sub){
    let highest = 0;
    let topStudent = [];
    let allMarks = classObj.students.flatMap(stu => stu.marks.map(markObj => ({...markObj, studentName: stu.name})));

    allMarks.forEach(el => {
    if(el.subject === sub){
        if(el.mark > highest){
        highest = el.mark;
        topStudent = [el.studentName]   
        }else if(el.mark === highest){
            topStudent.push(el.studentName)
        }
    }
    })
    console.log(`${topStudent.join(', ')} scored highest mark in ${sub}: ${highest}`)
}
highestMark('Maths');
//12-print lowest mark
console.log('----12-----');
function lowestMark(sub){
    let lowest = Infinity;
    let bottomStudent = [];
    let allMarks = classObj.students.flatMap(stu => stu.marks.map(markObj => ({...markObj, studentName: stu.name})));

    allMarks.forEach(el => {
    if(el.subject === sub){
        if(el.mark < lowest){
        lowest = el.mark;
        bottomStudent = [el.studentName]   
        }else if(el.mark === lowest){
            bottomStudent.push(el.studentName)
        }
    }
    })
    console.log(`${bottomStudent.join(', ')} scored lowest mark in ${sub}: ${lowest}`)
}
lowestMark('Maths');

//13-Write a function to find and print the student with the highest total marks.
function highestTotal(){
let highestTotal = 0;
let topStudent = [];

for(let stu of classObj.students){
    let total = stu.marks.reduce((sum,m) => sum+m.mark,0);
    if(total > highestTotal){
        highestTotal = total;
        topStudent = [stu];
    }else if(total === highestTotal){
        topStudent.push(stu)
    }
}
console.log(`${topStudent.map(s => s.name).join(', ')} is the topper and the score is ${highestTotal}`)
}
highestTotal();

//14-Write a function to find and print the student with the lowest total marks.
function lowestTotal(){
let lowestTotal = Infinity;
let lowestStudent = [];
for(let stu of classObj.students){
    let total = stu.marks.reduce((sum,m) => sum+m.mark,0);
    if(total < lowestTotal){
        lowestTotal = total;
        lowestStudent = [stu];
    }else if(total === lowestTotal){
        lowestStudent.push(stu)
    }
}
console.log(`${lowestStudent.map(s => s.name).join(', ')} is the lowest and the score is ${lowestTotal}`)
}
lowestTotal();

//15- Write a function to find and print the subject with the highest average marks.
function highestAvg(){
let subjects = classObj.students[0].marks.map(m => m.subject);

let average = subjects.map(sub => {
    let total = classObj.students.reduce((sum, student) => {
        let markObj = student.marks.find(m => m.subject === sub);
        return sum + markObj.mark;
    },0)
    return {subject : sub, avg: total / classObj.students.length};
});
let top = average.reduce((max, curr) => curr.avg > max.avg ? curr : max);

console.log(`${top.subject} is the highest mark scored subject and  average mark is: ${top.avg.toFixed(2)}`)
}
highestAvg();

//16-Write a function to find and print the subject with the lowest average marks.
function lowesetAvg(){
    const subjects = classObj.students[0].marks.map(m => m.subject);

    const averageMin = subjects.map(sub => {
        const total = classObj.students.reduce((sum,stu) => {
            const markObj = stu.marks.find(m => m.subject === sub);
            return sum + markObj.mark;
        },0);
        return {subject: sub, avg: total/ classObj.students.length};
    });
    const lowest = averageMin.reduce((min, curr) => (curr.avg < min.avg ? curr : min));

    console.log(`${lowest.subject} has the lowest average: ${lowest.avg.toFixed(2)}`)
}
lowesetAvg();

//17-Write a function to calculate and print the overall average marks for the class.
function overallClassAvg(){
    let totalMarks = 0;
    let totalCount = 0;
    
    for(let stu of classObj.students){
        for(let m of stu.marks){
            totalMarks += m.mark;
            totalCount++;
        }
    }
    let avg = totalMarks / totalCount;
    console.log(`The overall average marks for the class is: ${avg.toFixed(2)}`)
}
overallClassAvg();

//18-Write a function to calculate and print the overall total marks for the class.
function overallMark(){
    let totalMarks = 0;

    for(let stu of classObj.students){
        for(let m of stu.marks){
            totalMarks += m.mark;
        }
    }
    console.log(`overall total mark for the class is: ${totalMarks}`);
}
overallMark();

//19-Write a function to calculate and print the average marks for each subject.
function avgMarkSub(){
    let subjectTotals = {};
    let subjectCounts = {};

    for(let stu of classObj.students){
        for(let m of stu.marks){
            if(!subjectTotals[m.subject]){
                subjectTotals[m.subject] = 0;
                subjectTotals[m.subject] =0;
            }
            subjectTotals[m.subject] += m.mark;
            subjectCounts[m.subject] += 1;
        }
    }
    for(let sub in subjectTotals){
        let avg =subjectTotals[sub] / subjectCounts[sub];
        console.log(`${sub} average: ${avg.toFixed(2)}`);
    }
}
avgMarkSub();

