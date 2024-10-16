import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.user__info}>
      <p className={css.username}>{userName.name}</p>
      <button className={css.button} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
