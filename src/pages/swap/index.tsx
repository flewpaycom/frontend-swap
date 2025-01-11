"use client"

import { useState } from "react"
import { ArrowsUpDownIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const tokens = [
  { symbol: "DOT", name: "Ethereum", icon: "🟣" },
  { symbol: "VARA", name: "Bitcoin", icon: "🟢" },
]



import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 0.5,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function SwapPage() {
  const [fromToken, setFromToken] = useState(tokens[0])
  const [toToken, setToToken] = useState(tokens[1])
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSwap = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(`Swapping ${amount} ${fromToken.symbol} to ${toToken.symbol}`)
    setIsLoading(false)
  }

  const switchTokens = () => {
    setFromToken(toToken)
    setToToken(fromToken)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Tilt options={defaultOptions} >
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-6 w-full max-w-md shadow-xl">
          <h1 className="text-3xl font-bold text-gray-500 mb-6 text-center">Swap Tokens</h1>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">From</label>
              <div className="flex space-x-2">
                <select
                  value={fromToken.symbol}
                  onChange={(e) => setFromToken(tokens.find(t => t.symbol === e.target.value) || tokens[0])}
                  className="bg-gray-400 bg-opacity-20 rounded-xl px-4 py-3 text-black w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {tokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.icon} {token.symbol}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="0.0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-400 bg-opacity-20 rounded-xl px-4 py-3 text-black w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={switchTokens}
                className="bg-purple-600 rounded-full p-2 hover:bg-primary transition-colors duration-200"
              >
                <ArrowsUpDownIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">To</label>
              <div className="flex space-x-2">
                <select
                  value={toToken.symbol}
                  onChange={(e) => setToToken(tokens.find(t => t.symbol === e.target.value) || tokens[1])}
                  className="bg-gray-400 bg-opacity-20 rounded-xl px-4 py-3 text-black w-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {tokens.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.icon} {token.symbol}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="0.0"
                  readOnly
                  value=""
                  className="bg-gray-400 bg-opacity-20 rounded-xl px-4 py-3 text-black w-1/2"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSwap}
            disabled={isLoading}
            className={`w-full mt-6 py-4 rounded-xl text-white font-bold text-lg transition-all duration-200 ${isLoading
              ? 'bg-purple-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
              }`}
          >
            {isLoading ? (
              <ArrowPathIcon className="animate-spin h-6 w-6 mx-auto" />
            ) : (
              'Swap Tokens'
            )}
          </button>
        </div>
      </Tilt>
    </div>
  )
}
