import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { set } from 'date-fns';

export function Comment ({ content, onDeleteComment}) {
   
    const [likeCount, setLikeCount] = useState (0);

   function handleDeleteComment() {
    console.log('deletar');
    

    onDeleteComment(content);
   }

  function handleLikeComment() {   
   setLikeCount((state)=> {
    return state + 1
   });
  // setLikeCount((state)=> {
 //   return state + 1 
 // sempre que for atualizar a informação  e essa informação depende do vfalor q ela tinha anteriormente é interessante usasr esse padrao
 }

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
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>

            </div>
        
        </div>
    )
}
