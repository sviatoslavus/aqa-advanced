function checkOrder(available, ordered){
    if(available < ordered){
        return "Your order is too large, we don't have enough goods."
    }
    else if(ordered === 0){
        return "Your order is empty"
    }
    else{
        return "Your order is accepted"
    }
}

const order1 = checkOrder(10, 5); // accepted
const order2 = checkOrder(10, 0); // empty order
const order3 = checkOrder(0, 2); // not enough

console.log(order1);
console.log(order2);
console.log(order3);