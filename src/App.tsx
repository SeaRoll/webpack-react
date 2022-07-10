import React from "react";
import pic from './pic.jpeg';
import './test.css';

export const App = () => {
  return (
    <div>
      <h1 className="hello">Hello!!</h1>
      <h2>Welcome to your First React App..!</h2>
      <img src={pic} alt="test-im" />
    </div>
  );
}