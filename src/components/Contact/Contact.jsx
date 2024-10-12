import css from './Contact.module.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';


export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <div className={css.contact__text_content}>
        <p className={css.contact__text}>
          <PersonIcon /> {name}
        </p>
        <p className={css.contact__text}>
          <PhoneIcon />
          {number}
        </p>
      </div>
      <div className={css.contact__actions}>
        <IconButton
          aria-label="delete"
          className={css.icon__btn}
          onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
