let operator = prompt('Enter operator (either +, -, * or /): ');
let num1 = parseInt(prompt('Enter first number: '));
let num2 = parseInt(prompt('Enter second number: '));
let result;

if (operator == '+'){
    result = num1 + num2;
    alert(num1 + operator + num2 + "=" + result);
}else if(operator == '-'){
    result = num1 - num2;
    alert(num1 + operator + num2 + "=" + result);
}else if(operator == '*'){
    result = num1 * num2;
    alert(num1 + operator + num2 + "=" + result);
}else if(operator == '/'){
    result = num1 / num2;
    alert(num1 + operator + num2 + "=" + result);
}else{
    alert('Input an operand');
}