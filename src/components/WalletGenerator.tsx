import React from "react";
import { Button } from "./ui/button";

const WalletGenerator = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="tracking-tight text-4xl md:text-5xl font-black">
        E-Wallet supports multiple blockchains
      </h1>
      <p className="text-primary/80 font-semibold text-lg md:text-xl">
        Choose a blockchain to get started
      </p>

      <div className="flex gap-2">
        <Button size={"lg"}>Solana</Button>
        <Button size={"lg"}>Ethereum</Button>
      </div>
    </div>
  );
};

export default WalletGenerator;
