import AppBar from '../AppBar/AppBar';
import Message from '../Message/Message';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.wrapper}>
      {<Message />}
      <AppBar />
      {children}
    </div>
  );
}
