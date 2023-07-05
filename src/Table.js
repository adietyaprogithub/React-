import React, { useEffect, useState } from "react";
import "./Table.css";

export default function Table() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("studentdata");

    if (savedData) {
      setInfo(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="main">
      {info.map((item) => {
        return (
          <div className="main2">
            <a> {item.name}</a>

            <a>{item.age}</a>
            <a>{item.Number}</a>
            <a>{item.school}</a>
          </div>
        );
      })}
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Number</th>
            <th>School</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.Number}</td>
                <td>{item.school}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}
