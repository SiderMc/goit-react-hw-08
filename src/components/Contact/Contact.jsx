import css from './Contact.module.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { showMessage } from '../../redux/contacts/slice';
import UpdateContact from '../UpdateContact/UpdateContact';
import { useState } from 'react';

export default function Contact({ data: { name, number, id } }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(showMessage(`Contact ${name} deleted from your list`));
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleCloseUpdate = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className={css.contact}>
        <div className={css.contact__text_content}>
          <p className={css.contact__text}>
            <PersonIcon /> {name}
          </p>
          <p className={css.contact__text}>
            <PhoneIcon /> {number}
          </p>
        </div>
        {isEditing && <UpdateContact id={id} onClose={handleCloseUpdate} />}
        <div className={css.contact__actions}>
          <IconButton
            disabled={isEditing}
            aria-label="update"
            className={css.icon__btn}
            onClick={handleUpdate}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            className={css.icon__btn}
            onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}
