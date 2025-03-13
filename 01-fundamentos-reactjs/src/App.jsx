import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';


export function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
         <Sidebar /> 
           <main>
            <Post 
            author="Emmanuel Guerra"
            content="Olá Rede!"
            />    <br />
            <Post 
            author="Francisco Garcia"
            content="Texto aleatorio"
            />  
           </main>
        </div>
   </div>
  )
}

