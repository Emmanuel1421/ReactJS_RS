import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/emmanuel1421.png"/>
                    <div className={styles.authorInfo}>
                     <strong>Emmanuel Guerra</strong>   
                     <span>Web Developer</span>
                    </div>
                </div >

                <time title='13 de março as 8:37h' dateTime='13/03/2025 08:37'>Publicado há uma hora</time>
            </header>


            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 {' '}<a href="">jane.design/doctorcare</a></p>

            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href=''>#nlw</a>{' '}
                <a href=''>#rocketseat</a>{' '}
            </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                  placeholder='Deixe um comentário'
                />

                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               <Comment />
               <Comment />
               <Comment />
            </div>
        </article>
    )
}