import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avathar} 
                    src="https://github.com/emmanuel1421.png"/>
                    <div className={styles.authorInfo}>
                     <strong>Emmanuel Guerra</strong>   
                     <span>Web Developer</span>
                    </div>
                </div >

                <time title='13 de março as 8:37h' dateTime='13/03/2025 08:37'>Publicado há uma hora</time>
            </header>
        </article>
    )
}