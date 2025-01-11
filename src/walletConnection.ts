import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import toast from "react-hot-toast";

interface WalletConnection {
  api: ApiPromise;
  accounts: InjectedAccountWithMeta[];
}

const RPC_ENDPOINT = "wss://rpc.polkadot.io";

async function connectWallet(): Promise<WalletConnection | undefined> {
  try {

    const extensions = await web3Enable("Flewpay-Swap");
    if (extensions.length === 0) {
      toast.error("Por favor, instala la extensión de wallet para usar");
      return;
    }

    const accounts = await web3Accounts();
    if (accounts.length === 0) {
      toast.error("No se encontraron cuentas en la wallet");
      return;
    }


    const wsProvider = new WsProvider(RPC_ENDPOINT);


    const api = await Promise.race([
      ApiPromise.create({ provider: wsProvider }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout al conectar con la red")), 15000)
      )
    ]) as ApiPromise;

    await api.isReady;

    toast.success("Conexión exitosa con la wallet");

    return { api, accounts };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    toast.error(`Error al conectar: ${errorMessage}`);
    console.error("Error en connectWallet:", error);
  } finally {
    console.error("Finally en connectWallet");
  }
}


async function checkConnection(api: ApiPromise): Promise<boolean> {
  try {
    await api.isReady;
    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version()
    ]);

    console.log(`Conectado a ${chain}: ${nodeName} v${nodeVersion}`);
    return true;
  } catch (error) {
    console.error("Error al verificar la conexión:", error);
    return false;
  }
}


async function disconnectWallet(api: ApiPromise): Promise<void> {
  try {
    await api.disconnect();
    toast.success("Wallet desconectada exitosamente");
  } catch (error) {
    toast.error("Error al desconectar la wallet");
    console.error("Error en disconnectWallet:", error);
  }
}

export { connectWallet, checkConnection, disconnectWallet, type WalletConnection };
