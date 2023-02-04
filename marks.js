const prompt = require("prompt-sync")();

// array for subject titles
var subjectTitle = [];

// array for student name
var marksList = [];

// var for student marks
var studentMarks = [];

// get for subjects
var subLength = prompt("How many subjects do you want to record : ");
for (let i = 1; i <= subLength; i++) {
  let title = prompt(`enter subject title ${i} : `);
  if (isNaN(parseInt(title))) {
    subjectTitle.push(title);
  } else {
    console.log("Please enter a valid title");
    i--;
  }
}

// get student names
var studentLength = prompt("How many students are you inputting : ");

if (isNaN(parseInt(studentLength))) {
  studentLength = prompt("please enter a valid number");
}

for (let i = 1; i <= studentLength; i++) {
  var studentName = prompt("Enter student name : ");
  console.log("Let's enter subject marks now");
  var marksList = [];
  for (let i = 0; i < subjectTitle.length; i++) {
    let subjectMarks = prompt(
      `Enter ${subjectTitle[i]} marks for ${studentName} : `
    );
    // check for valid marks
    if (!isNaN(parseInt(subjectMarks)) && subLength < 101) {
      marks = {
        name: subjectTitle[i],
        marks: subjectMarks,
      };
      marksList.push(marks);
    } else {
      console.log("Please enter valid marks");
      i--;
    }
  }
  // adding marks to the array
  studentMarks.push({
    name: studentName,
    subjectMarks: marksList,
  });
}

// display titles for the table
var tableTitle = "   | Name | ";
for (let i = 0; i < subjectTitle.length; i++) {
  tableTitle = tableTitle + `${subjectTitle[i]} |`;
}

console.log("\n");
//display title for table
console.log(tableTitle);

// display marks in a table
var tableContent = "";
for (let i = 0; i < studentMarks.length; i++) {
  tableContent = tableContent + ` ${i + 1} | ${studentMarks[i].name} | `;
  for (let j = 0; j < studentMarks[i].subjectMarks.length; j++) {
    tableContent = tableContent + `${studentMarks[i].subjectMarks[j].marks} |`;
  }
  tableContent = tableContent + "\n";
}

console.log(tableContent);
