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
        <div className="bg-black w-screen h-screen sm:flex md:flex-col text-white  sm:justify-center sm:items-center overflow-hidden">
            <div className=" sm:shadow-2xl shadow-slate-500 rounded-lg min-h-[80vh] max-h-[90vh] max-w-[100vw] sm:max-w-sm mb-8">
                <div className="min-h-[20vh] bg-red-700 p-4 rounded-t-xl">
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
