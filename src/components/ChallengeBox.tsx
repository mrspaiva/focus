import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.ChallengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt=""/>
            <strong>Exercite-se</strong>
            <p>Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</p>
          </main>

          <footer>
            <button 
            type="button"
            className={styles.ChallengeFailedButton}
            >
              Falhei
            </button>
            <button 
            type="button"
            className={styles.ChallengeSucceededButton}
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