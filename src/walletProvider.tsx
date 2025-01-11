import React, { createContext, useContext, useState } from "react";
import { connectWallet, disconnectWallet, WalletConnection } from "./walletConnection";
import toast from "react-hot-toast";

interface WalletContextType {
  wallet: WalletConnection | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletConnection | null>(null);

  const connect = async () => {
    try {
      const connection = await connectWallet();
      if (connection) {
        setWallet(connection);
      }
    } catch (error) {
      console.error(error)
      toast.error("Error al conectar la wallet");
    }
  };

  const disconnect = async () => {
    if (wallet?.api) {
      await disconnectWallet(wallet.api);
      setWallet(null);
    }
  };

  const isConnected = wallet !== null;

  return (
    <WalletContext.Provider value={{ wallet, connect, disconnect, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
};


export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet debe usarse dentro de WalletProvider");
  }
  return context;
};
