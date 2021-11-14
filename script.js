let number = "";
let storedNumber = "";
let operator = "";

const addition = (x, y) => x += y; 
const subtraction = (x, y) => x -= y;
const multiplication = (x, y) => x *= y;
const division = (x, y) => x / y;

const displayDiv = document.querySelector("#display");
const numButton = document.querySelectorAll(".num-button")
const operatotBtn = document.querySelectorAll(".operator-button")

const buttons = () => {

    numButton.forEach(element => {
        element.addEventListener("click", function(e) {
            addNum(element.id);
        })
    });

    operatotBtn.forEach(element => {
        element.addEventListener("click", function(e){
            operator = element.id;
            storedNumber = number;
            number = "";
        })
    })
}

buttons();

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

function addNum(num) {
    
    number += num;
    displayDiv.textContent = number;

}