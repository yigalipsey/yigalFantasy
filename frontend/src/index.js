import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { LeagueProvider } from './context/LeagueContext'
import { MyTeamProvider } from './context/MyTeamContext'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyTeamProvider>
        <LeagueProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </LeagueProvider>
      </MyTeamProvider>
    </BrowserRouter>
  </React.StrictMode>
)
