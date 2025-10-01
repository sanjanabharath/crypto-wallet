import "./App.css";
import Navbar from "./components/Navbar";
import { ToastProvider } from "./components/ui/use-toast";

import WalletGenerator from "./components/WalletGenerator";

function App() {
  return (
    <ToastProvider>
      <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh]">
        <Navbar />
        <WalletGenerator />
      </div>
    </ToastProvider>
  );
}

export default App;
