import styles from '../styles/components/CompletedChallenges.module.css'

export default function CompletedChallenges() {
  return (
    <div className={styles.CompletedChallengesContainer}>
      <p>Desafios Completados</p>
      <span>00</span>
    </div>
  )
}