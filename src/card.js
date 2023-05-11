import React from "react";
import "./App.css";

export default function Card({ unidata }) {
  const { Name, Education, Role , Image } = unidata;
  return (
   
     
        <div >
        <div className="card">
          <img className="imgr" src={Image} alt="" />
          <h2> Name {Name}</h2>
          <h3> Education {Education}</h3>
          <h3> Role {Role}</h3>
        </div>
        </div>
        
       
     
    
  );
}
