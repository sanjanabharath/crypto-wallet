import React from "react";
import { Wallet } from "lucide-react";
import { Toggle } from "./ui/toggle";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <Wallet className="size-8" />
        <div className="flex flex-col gap-4">
          <span className="text-3xl flex items-center font-extrabold gap-2">
            E-Wallet <span></span>
          </span>
        </div>
      </div>
      <Toggle>Toggle</Toggle>
    </nav>
  );
};

export default Navbar;
