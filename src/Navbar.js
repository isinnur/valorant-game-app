import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">

      <ul className='navbar'>
        <li>
          <NavLink to="/agents" className='agents button'>Agents</NavLink>
        </li>

        <li>
          <NavLink to="/" className="main-navbar">
            <img className='main-img' src='https://img.icons8.com/?size=512&id=GjCK2f2wpZxt&format=png'></img>
          </NavLink>
        </li>

        <li>
          <NavLink to="/weapons" className='weapons button'>Weapons</NavLink>
        </li>
      </ul>
    </nav>
  );
}