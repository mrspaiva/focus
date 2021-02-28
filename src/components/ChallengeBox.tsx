import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)

  return (
    <div className={styles.ChallengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            { activeChallenge.type === 'body' ?  (
              <img src="icons/body.svg" alt=""/>
            ) : (
              <img src="icons/eye.svg" alt=""/>
            ) }

            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
            type="button"
            className={styles.ChallengeFailedButton}
            onClick={resetChallenge}
            >
              Falhei
            </button>
            <button 
            type="button"
            className={styles.ChallengeSucceededButton}
            onClick={completeChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.ChallengeNotActive}>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt=""/>
            Complete-os e ganhe experiência e avance de level
          </p>
        </div>
      ) }
    </div>
  )
}