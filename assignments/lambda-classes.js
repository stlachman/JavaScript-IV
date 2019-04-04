class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }

  listsSubjects(favSubjects) {
    for (let i = 0; i < favSubjects.length; i++) {
      console.log(favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`)
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`)
  }

}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const sarah = new Instructor({
  name: 'Sarah',
  location: 'Boston',
  age: 27,
  gender: 'female',
  favLanguage: 'Ruby',
  specialty: 'Back-end',
  catchPhrase: `Algos for days`
});

const jimbob = new Student({
  name: 'Jim Bob',
  location: 'Santa Fe',
  age: 29,
  gender: 'male',
  favLanguage: 'Elixir',
  specialty: 'Back-end',
  previousBackground: 'Barista',
  className: 'CS20',
  favSubjects: ['Data Structures', 'Algorithms', 'Functional Programming']
});


const jenn = new Student({
  name: 'Jenn',
  location: 'Lancaster',
  age: 24,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Front End',
  previousBackground: 'Hospitality',
  className: 'WEB18',
  favSubjects: ['HTML', 'CSS', 'Semantic HTML']
});

const kayla = new ProjectManager({
  name: 'Kayla',
  location: 'Seattle',
  age: 32,
  gender: 'female',
  favLanguage: 'Clojure',
  specialty: 'Back-end',
  catchPhrase: 'I love logic!',
  gradClassName: 'CS1',
  favInstructor: 'Josh'
});


const laura = new ProjectManager({
  name: 'Laura',
  location: 'Madison',
  age: 40,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'I love User Interface!',
  gradClassName: 'CS4',
  favInstructor: 'Ryan'
});

// Instructors
console.log(fred);

console.log(sarah.demo('ruby'));
console.log(sarah.grade(jimbob, 'ruby'));


// Students
console.log(jimbob.listsSubjects(jimbob.favSubjects));
console.log(jimbob.PRAssignment('JavaScript IV'));
console.log(jimbob.sprintChallenge('JavaScript Fundamentals'));

console.log(jenn.listsSubjects(jenn.favSubjects));
console.log(jenn.PRAssignment('Responsive Web Design'));
console.log(jenn.sprintChallenge('Advanced CSS'));


// Project Managers
console.log(kayla)
console.log(kayla.standUp('Pizza'));
console.log(kayla.debugsCode(jimbob, 'closure'));

console.log(laura)
console.log(laura.standUp('Web 18'));
console.log(laura.debugsCode(jenn, 'scope'));
