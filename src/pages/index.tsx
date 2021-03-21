import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import styles from '../styles/pages/Login.module.css'

export default function login() {
  const inputRef = useRef<HTMLInputElement>(null)

  const { push } = useRouter()
  const [username, setUsername] = useState('')


  function handleSubmit(e) {
    e.preventDefault()
    { username && push(`/${username}`) }
  }
  return (
    <div className={styles.container}>
        <img className={styles.symbol} src="simbolo.svg" alt=""/>
        
        <main>
          <h1>Bem-vindo ao Focus</h1>

          <section className={styles.loginContent}>
            <img src="icons/github.svg" alt=""/>
            <p>Faça login com seu Github para começar</p>
          </section>

          <form 
          className={styles.inputContent}
          onSubmit={handleSubmit}
          >
            <input 
            className={styles.inputText} 
            type="text" 
            placeholder="Digite seu username"
            onChange={e => setUsername(e.target.value)}
            ref={inputRef}
            />

            <button type="submit" className={styles.inputButton}>
              <img src="icons/arrow-right.svg" alt=""/>
            </button>
          </form>

        </main>
    </div>
  )
}