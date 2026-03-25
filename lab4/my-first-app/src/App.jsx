import React from "react";
import ToggleBulb from "./components/q1";
import TogglePassword from "./components/q2";
import Counter from "./components/q5";
import ParentChildList from "./components/q3";
import RouterPages from "./components/q4";

const App = () => {
  return (
    <div className="App">
      <div className="first-row">
        <ToggleBulb />
        <TogglePassword />
      </div>
      <div className="second-row">
        <ParentChildList />
        <RouterPages />
        <Counter />
      </div>
    </div>
  );
};

export default App;
