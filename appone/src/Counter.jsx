import { useState } from "react"; // state is where a data that can change inside a component update dynamically

function Counter() {
    //state variable count 
    const [ count, setCount ] = useState(0);

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className ="text-2xl font-bold">Np's Counting App</h1>
            <p className="text-lg mt-3">Count: {count}</p>

            <div className="mt-4 space-x-4">
            <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setCount(count + 1)}>
                Increment it!
            </button>
            <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setCount(count+5)}>
                +5 it!
            </button>
            <button
             className="px-4 py-2 bg-green-500 text-white rounded"
             onClick={() => setCount(count*2)}>
                Double it!
             </button>
             <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setCount(Math.max(0, count - 1))}>
            Decrement it!
            </button>

            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setCount(0)}>
                Reset it!
              </button>
            </div>
        </div>
    );
}


export default Counter;
