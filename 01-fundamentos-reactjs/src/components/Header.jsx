import styles from './Header.module.css'

import igniteSimbol from '../assets/igniteSimbol.svg';

console.log(igniteSimbol);

export function Header() {
    return (
        <header className={styles.header}>
           <img src={igniteSimbol} alt="logotipo do ignite" />
        </header>
    );
}