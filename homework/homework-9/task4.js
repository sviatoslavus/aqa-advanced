const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

person.email = "jonhdoe@gmail.com";
delete person.age;
console.log(person);
