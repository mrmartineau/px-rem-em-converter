import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [base, setBase] = useState(16);
  const [roundedValues, setRoundedValues] = useState(false);

  const arr = Array.from({ length: 1000 }, Number.call, (i) => i + 1);
  return (
    <div className="App">
      <h1 className="font-sans text-xl text-gray-800 text-center font-bold mt-5">
        px to rem/em table
      </h1>
      <h2 className="font-sans text-lg text-gray-800 text-center mb-3">
        if 1rem === {base}px
      </h2>
      <input
        value={base}
        onChange={(event) => setBase(event.target.value)}
        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
      />
      <label className="ml-3">
        <input
          type="checkbox"
          checked={roundedValues}
          onChange={() => setRoundedValues(!roundedValues)}
        />{" "}
        Round values
      </label>

      <table className="table-auto my-5 mx-auto w-1/2 font-mono text-left">
        <thead>
          <tr>
            <td className="border px-4 py-2">index</td>
            <td className="border px-4 py-2">px</td>
            <td className="border px-4 py-2">rem</td>
            <td className="border px-4 py-2">em</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((i) => {
            const value = roundedValues
              ? (i / Number(base)).toString().substring(0, 5)
              : i / Number(base);

            return (
              <tr className={i % 2 && `bg-gray-100`} key={i}>
                <td className="border px-4 py-2">{i}</td>
                <td className="border px-4 py-2">{i}px</td>
                <td className="border px-4 py-2">{value}rem</td>
                <td className="border px-4 py-2">{value}em</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
