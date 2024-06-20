import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import LandingPage from './pages/LandingPage.jsx';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
