class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get cloneFirstName() {
    return this.firstName;
  }

  set cloneFirstName(firstName) {
    this.firstName = firstName;
  }

  get cloneLastName() {
    return this.lastName;
  }

  set cloneLastName(lastName) {
    this.lastName = lastName;
  }

  get cloneAge() {
    return this.age;
  }

  set cloneAge(age) {
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);