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


console.log(fred);

console.log(sarah.demo('ruby'));
console.log(sarah.grade(jimbob, 'ruby'));

console.log(jimbob.listsSubjects(jimbob.favSubjects));
console.log(jimbob.PRAssignment('JavaScript IV'));
console.log(jimbob.sprintChallenge('JavaScript Fundamentals'));

console.log(kayla)
console.log(kayla.standUp('Pizza'));
console.log(kayla.debugsCode(jimbob, 'closure'));
