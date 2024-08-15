//can't get my NavBar to show up 

import './App.css'
import HomePage from "./components/HomePage.jsx"
import { FilmsPage } from './components/FilmsPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
