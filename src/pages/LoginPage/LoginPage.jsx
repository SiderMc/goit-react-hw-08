import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';

export default function LoginPage() {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isError && <Error />}
      {isLoading && <Loader />}
      <section className={css.register__page}>
        <div className={css.container}>
          <div className={css.register__content}>
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
