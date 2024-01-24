console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(num) {
  return function (plusNumber) {
    return num + plusNumber;
  };
}

const plus15 = plus(15);

console.log(plus15(10));

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => {
  console.log(user.name);
});

let nameAndScores = users.map((user) => {
  return { name: user.name, score: user.score };
});

console.log(nameAndScores);

let userActive = users.filter((user) => user.isActive);
console.log(userActive);

users.sort((a, b) => b.score - a.score);

console.log(users);

let scoreSum = users.reduce((sum, users) => sum + users.score, 0);
let avgScore = scoreSum / users.length;

console.log(avgScore);
