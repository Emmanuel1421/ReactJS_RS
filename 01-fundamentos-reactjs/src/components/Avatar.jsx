import styles from './Avatar.module.css';

// conceito de desestruturação const user = { name : "diego"}
//const { name } = user; 

export function Avatar({ hasBorder = true, src}) {
  
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} />
    );
}