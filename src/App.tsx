import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [mnemonics, setMnemonics] = useState("");
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh]">
      <Navbar />
    </div>
  );
}

export default App;
