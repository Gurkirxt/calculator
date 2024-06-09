function evaluate(expression: string) {
    let tokens = expression.split(" ");
    let values = [];
    let ops = [];

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == " ") {
            continue;
        }
        if (tokens[i] >= "0" && tokens[i] <= "9") {
            let sbuf = "";

            while (
                (i < tokens.length && tokens[i] >= "0" && tokens[i] <= "9") ||
                tokens[i] == "."
            ) {
                sbuf = sbuf + tokens[i++];
            }
            values.push(parseFloat(sbuf));
            i--;
        } else if (tokens[i] == "(") {
            ops.push(tokens[i]);
        } else if (tokens[i] == ")") {
            while (ops[ops.length - 1] != "(") {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }
            ops.pop();
        } else if (
            tokens[i] == "+" ||
            tokens[i] == "-" ||
            tokens[i] == "x" ||
            tokens[i] == "/"
        ) {
            while (
                ops.length > 0 &&
                hasPrecedence(tokens[i], ops[ops.length - 1])
            ) {
                values.push(applyOp(ops.pop(), values.pop(), values.pop()));
            }

            ops.push(tokens[i]);
        }
    }
    while (ops.length > 0) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
    }
    return values.pop();
}
function hasPrecedence(op1: string, op2: string) {
    if (op2 == "(" || op2 == ")") {
        return false;
    }
    if ((op1 == "x" || op1 == "/") && (op2 == "+" || op2 == "-")) {
        return false;
    } else {
        return true;
    }
}
function applyOp(op: string, b: number, a: number) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "x":
            return a * b;
        case "/":
            if (b == 0) {
                document.write("Cannot divide by zero");
            }
            return parseInt(String(a / b), 10);
    }
    return 0;
}

export default evaluate;