import { NavLink } from 'react-router-dom';

function Header({facade, loggedIn}) {
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
      </ul>
    </div>
  );
}

export default Header;