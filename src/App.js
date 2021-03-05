import React from "react";
import JSXVariables from "./components/JSXVariables";

function App() {
  return (
  <>
  <JSXVariables 
  operator="plus" num1={3} num2={2} 
  />
  <JSXVariables 
  operator="multiply" num1={3} num2={111} 
  />
  
  </>
  );
}

export default App;
//name of opp first num and second num