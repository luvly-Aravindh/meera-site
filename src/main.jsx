import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "@fontsource/gantari/400.css";
import "@fontsource/gantari/500.css";
import "@fontsource/gantari/700.css";
import "@fontsource/afacad/400.css";  // Regular
import "@fontsource/afacad/500.css";  // Medium
import "@fontsource/afacad/700.css";  // Bold

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)