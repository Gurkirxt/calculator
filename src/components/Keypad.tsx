import React from "react";

interface KeypadProps {
    expression: string;
    setExpression: React.Dispatch<React.SetStateAction<string>>;
    result: string;
    setResult: React.Dispatch<React.SetStateAction<string>>;
}

function Keypad({ expression, setExpression, setResult, result }: KeypadProps) {
    return (
        <div className="border-2 min-h-[80vh] grid grid-cols-4  bg-black p-1 rounded-b-lg">
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => {
                    setExpression("");
                    setResult("");
                }}
            >
                C
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => {
                    setExpression(expression + " (");
                }}
            >
                (
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => {
                    setExpression(expression + ") ");
                }}
            >
                )
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() =>
                    setExpression(expression.slice(0, expression.length - 1))
                }
            >
                &#x21e6;
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + " 1 / ")}
            >
                &#8543;x
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "^")}
            >
                x<sup>x</sup>
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + " root(")}
            >
                &#8730;x
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + " / ")}
            >
                &#247;
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "7")}
            >
                7
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "8")}
            >
                8
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "9")}
            >
                9
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + " * ")}
            >
                &#215;
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "4")}
            >
                4
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "5")}
            >
                5
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "6")}
            >
                6
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + " - ")}
            >
                -
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "1")}
            >
                1
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "2")}
            >
                2
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "3")}
            >
                3
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + " + ")}
            >
                +
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + " (- ")}
            >
                &#177;
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + "0")}
            >
                0
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => setExpression(expression + ".")}
            >
                .
            </button>
            <button
                className="p-6 m-0.5 bg-black rounded-lg hover:bg-slate-800 text-xl "
                onClick={() => {
                    setExpression(result);
                    setResult("0");
                }}
            >
                =
            </button>
        </div>
    );
}

export default Keypad;
