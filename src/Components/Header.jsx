import { NavLink } from 'react-router-dom';

function Header({facade, loggedIn, logout}) {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        {facade.hasUserAccess('user', loggedIn) && (
          <li>
            <NavLink activeClassName="active" to="/valutaberegner">
              Valutaberegner
            </NavLink>
          </li>
        )}
        {facade.hasUserAccess('admin', loggedIn) && (
          <li>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
        )}
        {(loggedIn)?<button className="logout_button" onClick={logout}>Logout</button>: <div></div>}
          
      </ul>
    </div>
  );
}

export default Header;