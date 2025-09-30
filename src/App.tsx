import "./App.css";
import Navbar from "./components/Navbar";

import WalletGenerator from "./components/WalletGenerator";

function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh]">
      <Navbar />
      <WalletGenerator />
    </div>
  );
}

export default App;
