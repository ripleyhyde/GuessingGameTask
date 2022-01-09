import React from "react";
import { useState } from "react";

function UserInput() {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState("Speak my name");
  let userInput = "";

  const saveUserInput = (event) => {
    userInput = event;
  };

  return (
    <div>
      <input
        placeholder={quote}
        onChange={(event) => saveUserInput(event.target.value)}
      />
    </div>
  );
  //   // } else if (counter == 1) {
  //   //   return (
  //   //     <div>
  //   //       <input placeholder="Do you believe in me?" />
  //   //     </div>
  //   //   );
  //   // } else if (counter == 2) {
  //   //   return (
  //   //     <div>
  //   //       <input placeholder="You will.." />
  //   //     </div>
  //   //   );
  //   // } else if (counter == 3) {
  //   //   return (
  //   //     <div>
  //   //       <img
  //   //         className="img"
  //   //         src="https://nofilmschool.com/sites/default/files/styles/facebook/public/candyman_shadow_puppet_scene.jpg?itok=oy5twpkH"
  //   //       ></img>
}

export default UserInput;
