import './App.css'
import { BrowserRouter } from 'react-router'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
