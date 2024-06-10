function evaluate(expression: string): string {
    let tokens = expression.split(" ");
    let values: number[] = [];
    let operators: string[] = [];
    let i: number = 0;
    while (i < tokens.length) {
        if (tokens[i] == " ") {
            i++;
            continue;
        }
        if (!isNaN(Number(tokens[i])) && !isNaN(parseFloat(tokens[i]))) {
            values.push(parseFloat(tokens[i]));
            i++;
        } else if (tokens[i] == "(") {
            operators.push(tokens[i]);
            i++;
        } else if (tokens[i] == ")") {
            while (operators[operators.length - 1] != "(") {
                values.push();
            }
            operators.pop();
            i++;
        } else if (
            tokens[i] == "+" ||
            tokens[i] == "-" ||
            tokens[i] == "x" ||
            tokens[i] == "/"
        ) {
            while (
                operators.length > 0 &&
                getPrecedence(operators[operators.length - 1]) >=
                    getPrecedence(tokens[i]) &&
                values.length >= 2
            ) {
                values.push(
                    applyops(operators.pop()!, values.pop()!, values.pop()!)
                );
            }
            operators.push(tokens[i]);
            i++;
        }
    }
    while (operators.length > 0 && values.length >= 2) {
        values.push(applyops(operators.pop()!, values.pop()!, values.pop()!));
    }

    return String(values.pop());
}

function applyops(operator: string, num2: number, num1: number): number {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":
            if (num2 == 0) {
                alert("Divide by Zero Error!!!");
            } else {
                return num1 / num2;
            }
            return 0;
        default:
            throw new Error("Invalid operator");
    }
}

function getPrecedence(op: string) {
    if (op == "+" || op == "-") {
        return 1;
    }
    if (op == "x" || op == "/") {
        return 2;
    }
    return 0;
}