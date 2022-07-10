import React from "react";
import pic from './pic.jpeg';

export const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <img src={pic} alt="test-im" />
    </div>
  );
}