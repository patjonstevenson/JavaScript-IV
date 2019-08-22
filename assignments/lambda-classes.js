class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  // Methods
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);

    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  // Methods
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  perfectGrade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }

  gradeStudent(student) {
    student.grade *= Math.random();
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);

    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  // Methods
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, "@channel standup time!"`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);

    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade;
  }

  // Methods
  listsSubjects() {
    console.log(`${this.name}'s favorite subjects are:`);
    this.favSubjects.forEach(subject => console.log(`${subject}`));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

// ********************
// ** INSTANTIATIONS **
// ********************

// INSTRUCTORS
const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 70,
  favLanguage: "Java",
  specialty: "Abstractions",
  catchPhrase: `Don't forget the boilerplate!`
});

const joe = new Instructor({
  name: "Joe",
  location: "Arkansas",
  age: 30,
  favLanguage: "Haskell",
  specialty: "Lambda Calculus",
  catchPhrase: `Forget the variables!`
});

// PMs
const billy = new ProjectManager({
  name: "Billy",
  location: "Virginia",
  age: 16,
  specialty: "Networking",
  favLanguage: "C",
  catchPhrase: "Don't forget to generate an RSA key!",
  gradClassName: "CS1",
  favInstructor: joe
});

const isaiah = new ProjectManager({
  name: "Isaiah",
  location: "South Carolina",
  age: 20,
  specialty: "Data Processing",
  favLanguage: "Python",
  catchPhrase: "There's only one way to do it right!",
  gradClassName: "CS2",
  favInstructor: joe
});

// STUDENTS
const franz = new Student({
  name: "Franz",
  location: "Alabama",
  age: 36,
  previousBackground: "Manufacturing",
  className: "WEB23",
  favSubjects: ["Back-end", "Data Processing", "Higher-Order Functions"],
  grade: 80
});

const raphael = new Student({
  name: "Raphael",
  location: "Texas",
  age: 26,
  previousBackground: "Construction",
  className: "WEB23",
  favSubjects: ["Networking", "System Programming", "C"],
  grade: 90
});

// ***********
// ** TESTS **
// ***********
console.log("\n\n\n\n****** lambda-classes.js *******\n\n");

// INSTRUCTOR TESTS
console.log("+ Instructor Tests +\n\n");
// Testing Fred
console.log(
  `${fred.name}'s favorite language is ${fred.favLanguage}. ${
    fred.name
  }'s specialty is ${fred.specialty}.`
);
console.log(`${fred.name} likes to say, "${fred.catchPhrase}"`);
fred.speak();
fred.demo("classical inheritance");
console.log("\n");

// Testing Joe
console.log(
  `${joe.name}'s favorite language is ${joe.favLanguage}. ${
    joe.name
  }'s specialty is ${joe.specialty}.`
);
console.log(`${joe.name} likes to say, "${joe.catchPhrase}"`);
joe.speak();
joe.demo("recursion");

// PM TESTS
console.log("\n\n+ Project Manager Tests +\n\n");

// Testing Billy
billy.speak();
console.log(`${billy.name} graduated in the class ${billy.gradClassName}.`);
console.log(
  `${billy.name}'s favorite instructor is ${billy.favInstructor.name}.`
);
console.log(`${billy.name} likes to say, "${billy.catchPhrase}"`);
billy.standUp("web23_billy");
billy.demo("HTML");
billy.debugsCode(raphael, "HTML");

// Testing Isaiah
console.log("\n");
isaiah.speak();
console.log(`${isaiah.name} graduated in the class ${isaiah.gradClassName}.`);
console.log(
  `${isaiah.name}'s favorite instructor is ${isaiah.favInstructor.name}.`
);
console.log(`${isaiah.name} likes to say, "${isaiah.catchPhrase}"`);
isaiah.standUp("web23_isaiah");
isaiah.demo("CSS");
isaiah.debugsCode(franz, "CSS");

// STUDENT TESTS
console.log("\n\n+ Student Tests +\n\n");

// Testing Joel
franz.speak();
console.log(
  `Before joining Lambda School's ${franz.className}, ${franz.name} worked in ${
    franz.previousBackground
  }.`
);
franz.listsSubjects();
franz.PRAssignment("CSS");
franz.sprintChallenge("CSS");

// Testing Raphael
console.log("\n");
raphael.speak();
console.log(
  `Before joining Lambda School's ${raphael.className}, ${
    raphael.name
  } worked in ${raphael.previousBackground}.`
);
raphael.listsSubjects();
raphael.PRAssignment("HTML");
raphael.sprintChallenge("HTML");

/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

console.log("\n\n\nTESTING STRETCH - gradeStudent METHOD \n\n");

console.log(`${raphael.name}'s current grade: ${raphael.grade}`);
console.log(`${isaiah.name} grades ${raphael.name}'s assignment...`);
isaiah.gradeStudent(raphael);
console.log(`${raphael.name}'s grade after assignment: ${raphael.grade}`);
