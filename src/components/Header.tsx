import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.logo}
                src={igniteLogo}
                alt="logotipo do ignite"
            />
            <strong className={styles.title}>Ignite Feed</strong>
        </header>
    );
}