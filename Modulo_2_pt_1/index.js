const classA = [
  {
    name: "Stefan",
    grade: 6
  },
  {
    name: "Fernanda",
    grade: 5.5
  },
  {
    name: "Rafael",
    grade: 2.5
  },
  {
    name: "Regina",
    grade: 4.5
  },
  {
    name: "Arthur",
    grade: 3.5
  }
];

const classB = [
  {
    name: "Jayce",
    grade: 10
  },
  {
    name: "Raphaele",
    grade: 9.9
  },
  {
    name: "Rodrigo",
    grade: 8.5
  }
];

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;

  return average;
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, "ClassA");
sendMessage(average2, "ClassB");

function sendMessage(average, Class) {
  if (average > 6) {
    console.log(`${Class} average: ${average.toFixed(2)}. congratulations!`);
  } else {
    console.log(`${Class} average: ${average.toFixed(2)}, Is not good.`);
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 6) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} flunked!`);
  }
}

function flunkedStudents(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

flunkedStudents(classA);
flunkedStudents(classB);
