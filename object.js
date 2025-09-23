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