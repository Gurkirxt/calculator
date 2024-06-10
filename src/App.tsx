import { useEffect, useState } from "react";
import "./App.css";
import evaluate from "./evalFunc.ts";
import Keypad from "./components/Keypad.tsx";

function App() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    useEffect(() => {
        const evaluatedResult = evaluate(expression);
        if (evaluatedResult && evaluatedResult != result) {
            setResult(String(evaluatedResult));
        }
    }, [expression]);
    return (
        <div className="bg-black w-screen h-screen flex flex-col text-white  justify-center items-center overflow-hidden">
            <div className="shadow-2xl shadow-slate-500 rounded-lg h-[80vh] max-w-[100vw] sm:max-w-sm w-sm mb-8">
                <div className="min-h-[20%] bg-red-700 p-4 rounded-t-xl">
                    <p className="text-end  items-start text-4xl overflow-hidden">
                        {expression}
                    </p>
                    <p className="text-end items-end text-2xl">{result}</p>
                </div>
                <Keypad
                    expression={expression}
                    setExpression={setExpression}
                    result={result}
                    setResult={setResult}
                ></Keypad>
            </div>
        </div>
    );
}

export default App;
