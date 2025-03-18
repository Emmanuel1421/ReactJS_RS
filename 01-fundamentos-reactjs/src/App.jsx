import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';


import './global.css';
import { Sidebar } from './components/Sidebar';

//  author: {avatar_url: "",name: "",role: ""}
// publishedAt: Date
// content: String

const posts = [
 {
  id : 1,
  author: {
    avatarUrl: 'https://github.com/emmanuel1421.png',
    name: 'Emmanuel Guerra',
    role: 'Web Developer'
  },
  content: [
    { type : 'paragraph', content: 'Fala galeraa 👋',},
    { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
    { type : 'link', content: 'jane.design/doctorcare' },
              
  ],
  publishedAt: new Date('2023-03-13 08:37:00'),
 },

 {
  id : 2,
  author: {
    avatarUrl: 'https://github.com/leonard0antonio.png',
    name: 'Leonardo Antonio',
    role: 'CEO da AiBank'
  },
  content: [
    { type : 'paragraph', content: 'Olá',},
    { type : 'paragraph', content: 'eu carrego',},
   { type : 'link', content: 'jane.design/doctorcare' },
              
  ],
  publishedAt: new Date('2025-03-18 08:02:00'),
 },
];



export function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
         <Sidebar /> 
           <main>
           

           {posts.map(post => {
          console.log(post);
          return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
         })}

           </main>
        </div>
   </div>
  )
}

