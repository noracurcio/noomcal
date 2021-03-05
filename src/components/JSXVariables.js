import React from "react";

// const myname = "what"
// const myname2 = "huh"
// const thoughts = "is dope sauce on a bun extra fries"

// const h1Style = {
 
//   color: "mediumSeaGreen",
//   fontSize: "100px"
  
// }

// const h2Style = {
//   color: "mediumOrchid"
// }



function JSXVariables(props) {
  let result = 0;
  
  switch(props.operator){
    case"plus":
    result = props.num1 + props.num2;
    break;


    case"multiply":
    result = props.num1 * props.num2;
    break;

    default:
      result = 0;
  }

  return (
    <div className="Result">
      <h2>The result of your calculation is {result}</h2> 
    </div>
  );
}

export default JSXVariables;
