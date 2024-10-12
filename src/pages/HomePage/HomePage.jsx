import css from './HomePage.module.css'

export default function HomePage() {
    return <div className={css.home__page_content}>
          <h1 className={css.hero__title}>Welcome to Your Personal Contacts Manager</h1>
          <h2 className={css.hero__sub_title}>Organize, store, and manage your contacts with ease</h2>
    </div>
}