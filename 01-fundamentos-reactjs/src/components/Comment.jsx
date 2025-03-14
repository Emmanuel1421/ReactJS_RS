
import styles from './Comment.module.css';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Emmanuel14221.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                    <div className={styles.authorAndTime}>
                        <strong>Emmanuel Guerra</strong>
                        <time title='13 de março as 8:37h' dateTime='13/03/2025 08:37'>Cerca de 2h atrás</time>
                    </div>

                        <button title='Deletar Comentário'>
                          <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
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