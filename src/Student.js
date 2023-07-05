import React from "react";
import { useState } from "react";
import './Student.css'


export default function Student() {
    const [data, setdata] = useState({
      name: "",
      age: "",
      Number: "",
      school: "",
    });
  
    const changehandler = (e) => {
      setdata({ ...data, [e.target.name]: e.target.value });
    };
  
    const handler = (e) => {
      e.preventDefault();
      const studentData = JSON.parse(localStorage.getItem("studentdata")) || [];
      const newdata = [...studentData, data];
      localStorage.setItem("studentdata", JSON.stringify(newdata));
      setdata({ name: "", age: "", Number: "", school: "" });
    };
  
    return (
      <div className="container">
        <h1>Add the Info </h1>
        <form onSubmit={handler}>
          <p>Enter a Name</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changehandler}
            required
          />
          <br />
          <p>Enter a Age</p>
          <input
            type="Number"
            name="age"
            value={data.age}
            onChange={changehandler}
            required
          />
          <br />
          <p>Enter a Number</p>
          <input
            type="Number"
            name="Number"
            value={data.Number}
            required
            onChange={changehandler}
          />
          <br />
          <p>Enter a school</p>
          <input
            type="text"
            name="school"
            value={data.school}
            onChange={changehandler}
            required
          />
          <br />
          <div className="btn">
          <button className="btn1" type="submit">Submit</button>
       
          </div>
           </form>
      </div>
    );
  }
  