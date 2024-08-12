import './App.css'
import HomePage from "./components/HomePage.jsx"
import { FilmsPage } from './FilmsPage.jsx'

function App() {
  return (
    <>
     <div className="navBar">
       <a href="#home">Home</a>
       <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
    <HomePage />
    <br></br>
    <hr></hr>
    <div>
      <FilmsPage />
    </div>
    </>
  )
}

export default App
