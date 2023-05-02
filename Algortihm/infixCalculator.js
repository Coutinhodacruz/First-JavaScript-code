class InfixEvaluator {
    static isOperator(c) {
        return c === '+' || c === '-' || c === '*' || c === '/';
    }

    static precedence(operator) {
        if (operator === '+' || operator === '-') {
            return 1;
        } else if (operator === '*' || operator === '/') {
            return 2;
        } else {
            return 0;
        }
    }

    static applyOperator(operator, operand1, operand2) {
        if (operator === '+') {
            return operand1 + operand2;
        } else if (operator === '-') {
            return operand1 - operand2;
        } else if (operator === '*') {
            return operand1 * operand2;
        } else if (operator === '/') {
            if (operand2 === 0) {
                throw new Error('Division by zero');
            }
            return Math.floor(operand1 / operand2);
        } else {
            throw new Error('Invalid operator');
        }
    }

    static evaluate(expression) {
        const operands = [];
        const operators = [];

        let i = 0;
        while (i < expression.length) {
            const c = expression.charAt(i);

            if (/\d/.test(c)) {
                let operand = 0;
                while (i < expression.length && /\d/.test(expression.charAt(i))) {
                    operand = operand * 10 + parseInt(expression.charAt(i));
                    i++;
                }
                operands.push(operand);
                i--;
            } else if (InfixEvaluator.isOperator(c)) {
                while (operators.length > 0 && InfixEvaluator.precedence(operators[operators.length - 1]) >= InfixEvaluator.precedence(c)) {
                    const operand2 = operands.pop();
                    const operand1 = operands.pop();
                    const operator = operators.pop();
                    const result = InfixEvaluator.applyOperator(operator, operand1, operand2);
                    operands.push(result);
                }
                operators.push(c);
            } else if (c === '(') {
                operators.push(c);
            } else if (c === ')') {
                while (operators[operators.length - 1] !== '(') {
                    const operand2 = operands.pop();
                    const operand1 = operands.pop();
                    const operator = operators.pop();
                    const result = InfixEvaluator.applyOperator(operator, operand1, operand2);
                    operands.push(result);
                }
                operators.pop();
            }

            i++;
        }

        while (operators.length > 0) {
            const operand2 = operands.pop();
            const operand1 = operands.pop();
            const operator = operators.pop();
            const result = InfixEvaluator.applyOperator(operator, operand1, operand2);
            operands.push(result);
        }

        if (operands.length !== 1 || operators.length > 0) {
            throw new Error('Invalid expression');
        }

        return operands[0];
    }
}

const expression = '6 + 4 * 7 - 9';
const result = InfixEvaluator.evaluate(expression);
console.log(`${expression} = ${result}`);
