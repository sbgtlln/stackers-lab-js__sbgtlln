function basicMathOperation(operator, value1, value2) {
    switch (operator) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            console.error('Неподдерживаемая операция:', operator);
            return NaN;
    }
}

