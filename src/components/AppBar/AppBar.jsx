import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <header className={css.header}>
      <Link className={css.logo} to="/"/>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
