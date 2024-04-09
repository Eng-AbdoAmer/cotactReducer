import "./styles.css";
import React from "react";
import ButtonGroup from "./components/ButtonGroup"; // Remove curly braces
import Button from "./components/Button";
import List from "./components/List";
import ShapOne from "./components/ShapOne";
import Counter from "./components/Counter";
export default function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonGroup>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
        <Button>four</Button>
        <Button>five</Button>
      </ButtonGroup>
      <List>
        <ShapOne />
      </List>
      <div>
        <Counter />
      </div>
    </div>
  );
}
