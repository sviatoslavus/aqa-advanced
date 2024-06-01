// 5.1 Area of Circle
{
  let radius = 5;

  let areaOfCircle = Math.PI * Math.pow(radius, 2);
  let areaOfCircleRounded = areaOfCircle.toFixed(2);

  console.log(`Area of Circle with radius ${radius} is ${areaOfCircleRounded}`);
}

//5.2 Area of rectangle
{
  let length = 5.05;
  let width = 4.1;
  let areaOfRectangle = length * width;
  let areaOfRectangleRounded = areaOfRectangle.toFixed(2);
  console.log(`Area of Rectangle with length of ${length} and width of ${width} is ${areaOfRectangleRounded}`);
}

//5.3 Volume of cylinder
{
  let radius = 6;
  let height = 4;
  let volumeOfCylinder = Math.PI * Math.pow(radius, 2) * height;
  let volumeOfCylinderRounded = volumeOfCylinder.toFixed(2);
  console.log(`Volume of cylinder with radius of ${radius}, and height of ${height} is ${volumeOfCylinderRounded}`);
}
