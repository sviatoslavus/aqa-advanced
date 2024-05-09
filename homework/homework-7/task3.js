
function divide(numerator, denominator){
    if(isNaN(numerator) || isNaN(denominator)){
        throw new Error("Make sure both argument are numbers")
    }
    else if(denominator === 0){
        throw new Error("Make sure denominator is not 0")
    }
    else{
        return numerator/denominator
    }
    
}
try {
    console.log(divide(5,1)); // no error(5)
} catch (error) {
    console.error(error.stack);
}
try {
    console.log(divide(5,0)); //Denominator is 0
} catch (error) {
    console.error(error.stack);
}
try{
    console.log(divide("hello",1)); // One of the arguments is a string
} catch(error){
    console.error(error.stack);
} finally{
    console.log("The job is done");
}



