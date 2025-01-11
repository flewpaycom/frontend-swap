import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
import { WalletProvider } from './walletProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <Toaster />
      <App />
    </WalletProvider>
  </StrictMode>,
)
