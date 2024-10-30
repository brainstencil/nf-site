import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/onest/300.css'; // Light
import '@fontsource/onest/400.css'; // Regular
import '@fontsource/onest/900.css'; // Block

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
