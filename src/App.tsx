import { useState } from "react";
import "./App.css";

function App() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    return (
        <>
            <div className="bg-black w-screen h-screen flex flex-col text-white justify-center items-center">
                <div className="min-h h-full w-full bg-red-700">
                    <p className="text-end items-bottom">{expression}</p>
                </div>
                <div className="border-2 max-w-md max-h-md grid grid-cols-4">
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        %
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        CE
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression("")}
                    >
                        C
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        {" "}
                        &lt;={" "}
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        1/X
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        x^2
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        r x
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        /
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "7")}
                    >
                        7
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "8")}
                    >
                        8
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "9")}
                    >
                        9
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "X")}
                    >
                        x
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "4")}
                    >
                        4
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "%")}
                    >
                        5
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "6")}
                    >
                        6
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "-")}
                    >
                        -
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "1")}
                    >
                        1
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "2")}
                    >
                        2
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "3")}
                    >
                        3
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "+")}
                    >
                        +
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + " ")}
                    >
                        +/-
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "0")}
                    >
                        0
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + ".")}
                    >
                        .
                    </button>
                    <button
                        className="p-6 m-2 border-2 rounded-lg"
                        onClick={() => setExpression(expression + "  ")}
                    >
                        =
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
