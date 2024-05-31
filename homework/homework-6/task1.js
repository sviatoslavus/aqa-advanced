// function declaration
function calculateRectangleArea(width, height) {
	return width * height;
}

const rectangleArea = calculateRectangleArea(5, 5);
console.log(rectangleArea);

// function expression
const rectangleArea2 = function (width, height) {
	return width * height;
};
console.log(rectangleArea2(5, 5));

// arrow function
const rectangleArea3 = (width, height) => {
	return width * height;
};
console.log(rectangleArea3(5, 5));
