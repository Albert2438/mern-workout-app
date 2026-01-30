import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'tachyons'
import 'material-symbols';   
import 'date-fns'

import { WorkoutContextProvider } from './context/WorkoutContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';




createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <WorkoutContextProvider>
    <StrictMode>
    <App darkMode={true}/>
  </StrictMode>
  </WorkoutContextProvider>
  </AuthContextProvider>

  
  
)
