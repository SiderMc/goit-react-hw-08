import css from './Message.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectMessage,
  selectMessageShow,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { selectIsError } from '../../redux/auth/selectors';

export default function Message() {
  const isShow = useSelector(selectMessageShow);
  const message = useSelector(selectMessage);
  const isErrorAuth = useSelector(selectIsError);
  const isErrorContacts = useSelector(selectError);

  useEffect(() => {
    if (isShow && message) {
      toast(message);
    }
  }, [isShow, message]);
  return (
    !isErrorAuth &&
    !isErrorContacts &&
    isShow && (
      <div className={css.message__content}>
        <Toaster
          containerStyle={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
          toastOptions={{
            style: {
              background: '#103928',
              color: '#25d366',
              minWidth: '100%',
              padding: 0,
              lineHeight: 0.8,
            },
          }}
        />
      </div>
    )
  );
}
