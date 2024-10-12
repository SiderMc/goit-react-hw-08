import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filters/selectors';

export default function ContactList() {
  const filterSelector = useSelector(selectFilteredContacts);

  return (
    <>
      {filterSelector.length > 0 ? (
        <ul className={css.contacts__list}>
          {filterSelector.map(contact => (
            <li className={css.contacts__list_item} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={css.no__contacts}>You have no contacts yet.</h2>
      )}
    </>
  );
}
