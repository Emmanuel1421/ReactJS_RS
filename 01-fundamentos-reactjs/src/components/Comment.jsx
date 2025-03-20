import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
 
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment ({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/mfts.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                    <div className={styles.authorAndTime}>
                        <strong>Marcio Canela</strong>
                        <time title='13 de março as 8:37h' dateTime='13/03/2025 08:37'>Cerca de 2h atrás</time>
                    </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                          <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
         
                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                   </button>
                </footer>

            </div>
        
        </div>
    )
}
