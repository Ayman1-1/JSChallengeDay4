// ! Start Task 1 : Warm up !
let user = {
  firstName: "Ayman",
  lastName: "hanine",
  age: "20",
  fullName: "",

  getFullName: function () {
    let newfullName =
      "<" + this.firstName + ">" + " " + "<" + this.lastName + ">";
    return newfullName;
  },
  setFullName: function (newfullName) {
    this.fullName = newfullName;
  },
};
console.log(user.getFullName());
// todo: End Task 1 : Warm up !
// ---------------------------------------------------

// ! Start Task 2 : Are you Older Than me ?
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
      return `${otherPerson.name} is older than me.`;
    } else if (this.age > otherPerson.age) {
      return `${otherPerson.name} is younger than me.`;
    } else {
      return `${otherPerson.name} is the same age as me.`;
    }
  }
}
// Test:
const p1 = new Person("Ayman", 42);
const p2 = new Person("Hamza", 18);
const p3 = new Person("Ahmed", 25);

console.log(p1.compareAge(p1));
// Todo: End Task 2 : Are you Older Than me ?
// ---------------------------------------------------

// ! Start Task 3 : Most Occurred
function mostOccurred(numbers) {
  const frequencyMap = {};

  numbers.forEach((number) => {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
  });

  let mostOccurredNumber;
  let maxFrequency = 0;

  for (const number in frequencyMap) {
    if (frequencyMap[number] > maxFrequency) {
      mostOccurredNumber = parseInt(number);
      maxFrequency = frequencyMap[number];
    }
  }

  return mostOccurredNumber;
}

//test:
const result = mostOccurred([4, 2, 2, 7, 2]);
console.log(result); 

// todo: End Task 3 : Most Occurred
