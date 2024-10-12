import css from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddIcon from '@mui/icons-material/Add';

export default function ContactsPage() {
  const [search, setSearch] = useState(false);
  const [add, setAdd] = useState(false);
  const [list, setList] = useState(true);
  const isLoading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSearch = () => {
    setSearch(true);
    setAdd(false);
    setList(true);
  };

  const handleAdd = () => {
    setAdd(true);
    setSearch(false);
    setList(false);
  };

  const handleList = () => {
    setList(true);
    setSearch(false);
    setAdd(false);
  };
  return (
    <>
      {!isLoading && isRefreshing && <Loader />}
      {isError && <Error />}
      <section className={css.contacts__page}>
        <div className={css.container}>
          <div className={css.contact__content}>
            <div className={css.contact__list_action}>
              <NavLink className={css.contact__btn} onClick={handleSearch}>
                <SearchIcon className={css.contact__icon} />
              </NavLink>
              <NavLink className={css.contact__btn} onClick={handleList}>
                <PermContactCalendarIcon className={css.contact__icon} />
              </NavLink>
              <NavLink className={css.contact__btn} onClick={handleAdd}>
                <AddIcon className={css.contact__icon} />
              </NavLink>
            </div>
            <div className={css.contact__forms}>
              {add && <ContactForm />}
              {search && <SearchBox />}
              {list && <ContactList />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
