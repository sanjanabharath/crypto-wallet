import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useToast } from "./ui/use-toast";

const WalletGenerator = () => {
  const { showToast } = useToast();
  const [pathType, setPathType] = useState<string[]>([]);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="tracking-tight text-4xl md:text-5xl font-black">
        E-Wallet supports multiple blockchains
      </h1>
      <p className="text-primary/80 font-semibold text-lg md:text-xl">
        Choose a blockchain to get started
      </p>

      <div className="flex gap-2">
        <Button
          size={"lg"}
          onClick={() => {
            setPathType(["501"]);
            showToast("Wallet selected. Please generate a wallet to continue");
          }}
        >
          Solana
        </Button>
        <Button
          size={"lg"}
          onClick={() => {
            setPathType(["60"]);
            showToast("Wallet selected. Please generate a wallet to continue");
          }}
        >
          Ethereum
        </Button>
      </div>
    </div>
  );
};

export default WalletGenerator;
