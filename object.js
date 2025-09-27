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
