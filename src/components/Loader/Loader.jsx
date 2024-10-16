import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <div className={css.loader__overlay}>
        <h2 className={css.loading}>Please wait ...</h2>
      </div>
    </div>
  );
}
