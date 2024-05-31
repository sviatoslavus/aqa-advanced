const users = [
  { name: "John", email: "johndoe@gmail.com", age: 22 },
  { name: "Sviatoslav", email: "sviatoslav.myhlias@gmail.com", age: 32 },
  { name: "Maria", email: "maria2003@gmail.com", age: 21 },
];
for (const i of users) {
  console.log(i);
}

for (const { name, email, age } of users) {
  console.log(`${name} is ${age} years old and his/her email is ${email}`);
}
