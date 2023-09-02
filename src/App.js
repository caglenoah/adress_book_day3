import React, { useState, useEffect } from "react";
import User from "./User"; 
import "./style.css";

console.clear();

export default function App() {
  const [users, setUsers] = useState([]);

  //component did mount
  useEffect(() => {
    console.log("Mounted");
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("Updated", users);
  }, [users]); // brings in what i want to update

  const handleClick = () => {
    setUsers();
  };

  // Time to map
  return (
    <div className="App">
      <h1>My stuff</h1>
      <ul>
        {users.map((user) => {
          return <User data={user} />;
        })}
      </ul>
    </div>
  );
}