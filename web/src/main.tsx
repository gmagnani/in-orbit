import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './app'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const querryClient = new QueryClient()
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  
  <QueryClientProvider client={querryClient}>
  <StrictMode>
    <App />
  </StrictMode>,

  </QueryClientProvider>
)
