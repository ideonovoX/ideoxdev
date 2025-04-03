
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

// Create the helmet context first
const helmetContext = {};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
