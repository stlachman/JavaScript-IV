class Person {
	constructor(personAttributes) {
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
		this.gender = personAttributes.gender;
	}

	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
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
		return `Today we are learning about ${subject}`;
	}

	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}`;
	}

	gradeAssignment(student) {
		const randomizer = Math.random() < 0.5 ? 'Negative' : 'Positive';
		if (randomizer === 'Positive') {
			student.grade += Math.floor(Math.random() * 10);
		} else {
			student.grade -= Math.floor(Math.random() * 10);
		}
	}
}

class Student extends Person {
	constructor(studentAttributes) {
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
		this.grade = studentAttributes.grade;
	}

	listsSubjects() {
		for (let i = 0; i < this.favSubjects.length; i++) {
			console.log(this.favSubjects[i]);
		}
	}

	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}

	graduate() {
		if (this.grade > 70) {
			return `${this.name} is ready to graduate!`;
		} else {
			return `${this.name} needs to pass a few more assignments to graduate.`;
		}
	}
}

class ProjectManager extends Instructor {
	constructor(pmAttributes) {
		super(pmAttributes);
		this.gradClassName = pmAttributes.gradClassName;
		this.favInstructor = pmAttributes.favInstructor;
	}

	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}

	debugsCode(student, subject) {
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
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
	favSubjects: [ 'Data Structures', 'Algorithms', 'Functional Programming' ],
	grade: 75
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
	favSubjects: [ 'HTML', 'CSS', 'Semantic HTML' ],
	grade: 80
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
// console.log(sarah.grade(jimbob, 'ruby'));

//  Instructor Grading Student
sarah.gradeAssignment(jimbob);
console.log(jimbob.grade);
sarah.gradeAssignment(jimbob);
console.log(jimbob.grade);

// Students
jimbob.listsSubjects();
console.log(jimbob.PRAssignment('JavaScript IV'));
console.log(jimbob.sprintChallenge('JavaScript Fundamentals'));

jenn.listsSubjects();
console.log(jenn.PRAssignment('Responsive Web Design'));
console.log(jenn.sprintChallenge('Advanced CSS'));

// Project Managers
console.log(kayla);
console.log(kayla.standUp('Pizza'));
console.log(kayla.debugsCode(jimbob, 'closure'));

// PM Grading Student
kayla.gradeAssignment(jenn);
console.log(jenn.grade);

kayla.gradeAssignment(jenn);
console.log(jenn.grade);

kayla.gradeAssignment(jenn);
console.log(jenn.grade);

console.log(jenn.graduate());

console.log(laura);
console.log(laura.standUp('Web 18'));
console.log(laura.debugsCode(jenn, 'scope'));
