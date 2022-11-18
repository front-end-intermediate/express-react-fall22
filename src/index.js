import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// import useToggle from "./hooks/useToggle";

// function Toggler() {
//   const [isHappy, toggleIsHappy] = useToggle(true);
//   const [isBanana, toggleIsBanana] = useToggle(true);

//   return (
//     <div>
//       <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
//       <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "👹"}</h1>
//     </div>
//   );
// }

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
