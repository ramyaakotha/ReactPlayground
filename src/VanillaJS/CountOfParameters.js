//implement a function called getParameterCount that takes a function as input and return the number of parameters that the input function expects.

function getParameterCount(inputFunction) {
    if(getParameterCount.length === 0) return 0
    const count = inputFunction.length
    return count
}


function noParams() {}
console.log(getParameterCount(noParams)); // Expected output: 0

function multipleParams(a, b, c) {}
console.log(getParameterCount(multipleParams)); // Expected output: 3

function defaultParams(a, b = 2, c = 3) {}
console.log(getParameterCount(defaultParams)); // Expected output: 3

const arrowFunc = (x) => x * x;
console.log(getParameterCount(arrowFunc)); // Expected output: 1
