import './App.css'
import AppLayout from './layout/AppLayout';
import { HomePage, WeatherPage } from './pages'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>  
          <Route path="/" index element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
