import Image from 'next/image';
import styles from './styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>⚛️ React email in ⏭️ Next.</h2>
      </div>
    </main>
  );
}
