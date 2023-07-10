import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Welcome</h2>
      <p className={styles.description}>
        Go forth and build something wonderful 😎.
      </p>
    </main>
  );
}
