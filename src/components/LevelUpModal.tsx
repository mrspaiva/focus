import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export default function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>

      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button className={styles.close} onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt=""/>
        </button>

        <button className={styles.twitter}>
          Compartilhar no twitter
          <img src="icons/twitter.svg" alt=""/>
        </button>
      </div>

    </div>
  )
}