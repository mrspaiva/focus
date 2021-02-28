import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  const { level } = useContext(ChallengesContext)

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/mrspaiva.png" alt="profile pic"/>
      <div>
        <h2>Natalia Paiva</h2>
        <p>
          <img src="icons/level.svg" alt="arrow svg"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}