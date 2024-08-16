//can't get my NavBar to show up 

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import HomePage from "./components/HomePage.jsx"
import { FilmsPage } from './components/FilmsPage.jsx'
import { SingleFilmPage } from './components/singlefilm.page.jsx'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
