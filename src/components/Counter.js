// Counter.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_NAME, SET_Age } from "../Store/store";
const Counter = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const setContact = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div>
      <h2>Name: {globalState.name}</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => setContact(SET_NAME, { name: userName })}>
        Set Name
      </button>
      <h2>Age: {globalState.age}</h2>
      <input
        type="text"
        placeholder="Enter your age"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />
      <button onClick={() => setContact(SET_Age, { age: userAge })}>
        Set Age
      </button>
    </div>
  );
};

export default Counter;
