const number = 7;

//for loop
for(let i = 1; i <= 10; i++){
    let multiplyNumber = number * i;
    console.log(`${number} x ${i} = ${multiplyNumber}`);
}

//while loop
let counter = 1;
while(counter <= 10){
    let multiplyNumber = number * counter;
    console.log(`${number} x ${counter} = ${multiplyNumber}`);
    counter++;
}