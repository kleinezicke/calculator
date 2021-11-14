let number = "";
let storedNumber = "";
let operator = "";

const addition = (x, y) => x += y; 
const subtraction = (x, y) => x -= y;
const multiplication = (x, y) => x *= y;
const division = (x, y) => x / y;

const displayDiv = document.querySelector("#display");
const equals = document.querySelector("#equals");
const numButton = document.querySelectorAll(".num-button");
const operatotBtn = document.querySelectorAll(".operator-button");
const dotBtn = document.querySelector("#dot");
const clearBtn = document.querySelector("#clear");

const clear = () => {
    number = "";
    storedNumber = "";
    operator = "";
    displayDiv.textContent = number;
}

const buttons = () => {

    numButton.forEach(element => {
        element.addEventListener("click", function(e) {
            addNum(element.id.slice(element.id.length - 1));
        })
    });

    operatotBtn.forEach(element => {
        element.addEventListener("click", function(e){
            operator = element.id
            storedNumber = number;
            number = "";
        })
    })

    equals.addEventListener("click", function(e){
        let result = operate(storedNumber, number, operator);
        displayDiv.textContent = result;
        number = result;
    })

    dotBtn.addEventListener("click", function(e){
        if (!number.includes(".")){
            addNum(".")
        }
    })

    clearBtn.addEventListener("click", function(e){
        clear();
    })
}

buttons();

const round = (num) => {
    num = Math.round(num * 100000) / 100000;
    return num;
}

function operate(num1, num2, operator) {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (num1 == "" || num2 == "" || operator == "")
        return number;
    else {
        switch (operator) {
            case "add":
                result = addition(num1, num2);
                result = round(result);
                return result;
            case "sub":
                result = subtraction(num1, num2);
                result = round(result);
                return result;
            case "mult":
                result = multiplication(num1, num2);
                result = round(result);
                return result;
            case "div":
                result = division(num1, num2);
                result = round(result);
                return result;
        }
    }
}

function addNum(num) {
    
    number += num;
    displayDiv.textContent = number;

}