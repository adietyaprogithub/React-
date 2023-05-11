import React from "react";
import Card from "./card";
import "./App.css";

const data = [
  { Name: "pritesh", Education: "IIT-Delhi", Role: "Mentor" , Image :"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { Name: "pritesh", Education: "IIT-Delhi", Role: "Mentor" , Image :"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { Name: "pritesh", Education: "IIT-Delhi", Role: "Mentor" ,  Image :"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { Name: "pritesh", Education: "IIT-Delhi", Role: "Mentor"  ,  Image :"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { Name: "pritesh", Education: "IIT-Delhi", Role: "Mentor"  ,  Image :"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  { Name: "pritesh", Education: "IIT-Delhi", Role: "Mentor" , Image :"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { Name: "pritesh", Education: "IIT-Delhi", Role: "Mentor" ,  Image :"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

export default function App() {
  return (
    <div className="container">
      {data.map((a, index) => (
        <Card key={index} unidata={a} />
      ))}
    </div>
  );
}
