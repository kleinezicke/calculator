const addition = (x, y) => x += y; 
const subtraction = (x, y) => x -= y;
const multiplication = (x, y) => x *= y;
const division = (x, y) => x / y;

function operate(num1, num2, operator) {
    let result;
    switch (operator) {
        case "add":
            result = addition(num1, num2);
            return result;
        case "sub":
            result = subtraction(num1, num2);
            return result;
        case "mult":
            result = multiplication(num1, num2);
            return result;
        case "div":
            result = division(num1, num2);
            return result;
    }
}