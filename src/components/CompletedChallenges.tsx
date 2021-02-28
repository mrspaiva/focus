import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.CompletedChallengesContainer}>
      <p>Desafios Completados</p>
      <span>{challengesCompleted}</span>
    </div>
  )
}