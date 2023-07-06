import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Table />
    </div>
  );
}

function Table() {
  const [data, setdata] = useState(0);
  const [info, setinfo] = useState([]);

  const handler = (e) => {
    setdata(e.target.value);
  };

  useEffect(() => {
    const calculate = () => {
      const table = [];
      for (let i = 0; i <= 10; i++) {
        const sum = i * data;
        table.push(sum);
      }
      setinfo(table);
    };

    calculate();
  }, );

  return (
    <div>
      <input type="text" onChange={handler} />
      {info.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}
