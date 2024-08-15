import { NavLink } from "react-router-dom";

function NavBar (){

    return(
    <nav className="nav-bar">
  <ul>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : null)}
        to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : null)}
        to="/films"> 
        FilmsPage
      </NavLink>
    </li>
  </ul>
</nav>
    );
}

export default NavBar; 
