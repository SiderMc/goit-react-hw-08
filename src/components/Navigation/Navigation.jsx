import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <nav className={css.navigation}>
      <NavLink className={css.nav__menu} to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink className={css.nav__menu} to="/contacts">
        Contacts
      </NavLink>}
    </nav>
  );
}
