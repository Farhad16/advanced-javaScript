// global variable 
const multiplier = 5;

function add(num1, num2) {
    result = (num1 + num2) * multiplier;
    console.log(result);

    const double = function (result) {
        // scope variable 
        const divider = 5;
        result = (result * 5) / divider;
        console.log("Inside function " + result);
    }

    const multiply = double(result);
    return multiply;
}


add(10, 10);

// though result is not declared as a viraible declaration keyword 
//like let or var or const but javaScript interpretor treat it as global variable  
console.log(result);