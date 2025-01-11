
import { useEffect, useState } from "react";
import { useWallet } from "../../walletProvider";





const Navbar = () => {
  const { connect, disconnect, wallet, isConnected } = useWallet();
  const [account, setAccount] = useState<string | null>(null)

  useEffect(() => {
    if (wallet) {
      setAccount(wallet.accounts[0].address)
    }
  }, [wallet])

  return (<div className="navbar bg-white/50 shadow-md rounded-b-md backdrop-blur-md sticky top-0">
    <div className="navbar-start">

    </div>
    <div className="navbar-center space-x-1">
      <img src="https://flewpay.com/_next/image?url=%2Fflew-transparent.png&w=256&q=75" alt="Logo Flew Pay" />
      <span className="text-4xl font-bold text-blue-500">
        -
      </span>
      <i className="text-4xl font-bold ">
        Swap
      </i>
    </div>
    <div className="navbar-end">
      {isConnected ? <button onClick={disconnect} className="btn btn-secondary rounded-badge">{isConnected && <span className="text-white truncate text-ellipsis w-32">{account}</span>} Disconnect </button> : <button onClick={connect} className="btn btn-primary rounded-badge">Connect</button>}
    </div>

  </div>)
}

export default Navbar
