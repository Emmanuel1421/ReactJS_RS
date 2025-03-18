import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format , formatDistanceToNow} from 'date-fns';  
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';



export function Post({ author, publishedAt }) {
    
    const publishedDateFormatted = format(publishedAt,"dd 'de' LLLL 'às' mm'h'",{
    locale: ptBR,

})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    
})

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                     <strong>{author.name}</strong>   
                     <span>{author.role}</span>
                    </div>
                </div >

                <time title={publishedDateFormatted} dateTime='13/03/2025 08:37'>
                </time>
            </header>


            <div className={styles.content}>
           
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