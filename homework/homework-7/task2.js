function printNumber(num){
      
    if(num >= 0){
        console.log(num);
        printNumber(num-1)
    }
    
}

printNumber(5)