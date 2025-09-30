import React from "react";
import { Wallet } from "lucide-react";
import { Toggle } from "./ui/toggle";
import ThemeToggle from "./ui/theme-btn";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <Wallet className="size-8" />
        <div className="flex flex-col gap-4">
          <span className="text-3xl flex items-center font-extrabold gap-2">
            E-Wallet{" "}
            <span className="border border-primary/50 bg-primary/10 rounded-full px-2 text-base">
              v1.0
            </span>
          </span>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
