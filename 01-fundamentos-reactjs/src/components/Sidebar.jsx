import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
             src="https://images.unsplash.com/photo-1575379972039-7135ca5a3c7b?w=200&dpr=1&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bGVvbmFyZG98cHR8MHx8fHwxNzQxNzc5Nzg3fDA&ixlib=rb-4.0.3" alt="" />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/emmanuel1421.png"  />

                <strong>Emmanuel Guerra</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}