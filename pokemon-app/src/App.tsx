import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
