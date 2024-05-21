const car1 = {
    brand: "SEAT",
    model: "Leon",
    year: 2016
}
const car2 = {
    brand: "BMW",
    model: "X5",
    owner: "John"
}

const car3 = {...car1, ...car2}

console.log(car3);
