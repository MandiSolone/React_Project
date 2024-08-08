import './App.css'
import HomePage from "./components/HomePage.jsx"

function App() {
  return (
    <>
     <div className="navbar">
       <a href="#home">Home</a>
       <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
    <HomePage />
    </>
  )
}

export default App
