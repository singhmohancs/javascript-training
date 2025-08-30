import './App.css'
import { BrowserRouter } from 'react-router'
import AuthProvider from './context/AuthContext'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
