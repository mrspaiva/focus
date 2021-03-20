import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/pages/Login.module.css'

export default function Login() {

  return (
    <div className={styles.container}>
        <img className={styles.symbol} src="simbolo.svg" alt=""/>
        
        <main>
          <h1>Bem-vindo ao Focus</h1>

          <section className={styles.loginContent}>
            <img src="icons/github.svg" alt=""/>
            <p>Faça login com seu Github para começar</p>
          </section>


          <section className={styles.inputContent}>
            <input 
            className={styles.inputText} 
            type="text" 
            placeholder="Digite seu username"
            />

            <Link href="/home ">
              <button className={styles.inputButton}>
                <img src="icons/arrow-right.svg" alt=""/>
              </button>
            </Link>
          </section>

        </main>
    </div>
  )
}