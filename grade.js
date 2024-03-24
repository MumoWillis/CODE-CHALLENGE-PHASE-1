const userInput = prompt("Enter student marks (between 0 and 100):"); //prompts the students to enter their marks
const marks = parseFloat(userInput);

if (!isNaN(marks)) {
    const grade = calculateGrade(marks);
    console.log(`Grade: ${grade}`);
} else {
    console.log("Invalid input! Please enter a valid number.");
}
   //Grades are calculated according to marks
function calculateGrade(marks) {
    if (marks > 79 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks >= 0 && marks < 40) {
        return 'E';
    } else {
        return 'Invalid input! Marks should be between 0 and 100.';
    }
}

//Returns values that correspond with the given grades
console.log(calculateGrade(90))
