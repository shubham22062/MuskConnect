import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/muskConnect_logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={logo} alt="MuskConnect Logo" className="w-32 h-32" />

      <h1 className="bg-amber-700">Welcome to MuskConnect!</h1>
    </>
  );
}

export default App;
