const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const i of numbers) {
	if (i < 0) {
		negativeCount++;
	} else if (i > 0) {
		positiveCount++;
	} else {
		zeroCount++;
	}
}
console.log(`Кількість позитивних чисел:${positiveCount}`);
console.log(`Кількість негативних чисел:${negativeCount}`);
console.log(`Кількість нульових чисел:${zeroCount}`);
