import Mexp from "math-expression-evaluator";

function evaluate(expression: string): String {
    const mexp = new Mexp();
    try {
        let lexed = mexp.lex(expression);
        console.log(lexed)
        let postfixed = mexp.toPostfix(lexed);
        console.log(postfixed)
        let result = mexp.postfixEval(postfixed);
        console.log(result)
        return String(result);
    } catch (error) {
        console.log(error)
        return String("");
    }
}

export default evaluate;
