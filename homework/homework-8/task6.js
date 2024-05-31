const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const coppiedArray = numbersList.slice();
coppiedArray.sort((a, b) => {
	return a - b;
});

console.log(`Original array ${numbersList}`);
console.log(`Sorted array ${coppiedArray}`);
