import React from 'react';
import { useState } from 'react';
import './App.css';

export function Button(props) {

  const handleClick = () => props.onClickFunction(props.increment)
  return (
      <button onClick= {handleClick}>
        +{props.increment}
      </button>
  );
}

export function Display(props) {
  return (
    <h1> {props.message} </h1>
  );
}

export function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (value) => setCounter(counter+value);
  return (
      <div>
        <Button onClickFunction = {incrementCounter} increment={5}/>
        <Button onClickFunction = {incrementCounter} increment={10}/>
        <Button onClickFunction = {incrementCounter} increment={50}/>
        <Button onClickFunction = {incrementCounter} increment={100}/>
        <Display message={counter} />
      </div>
  );
}


export default App;
