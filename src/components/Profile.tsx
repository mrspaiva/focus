import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

interface userGit {
  name: string;
  avatar_url: string;
}

export default function Profile(user: userGit) {
  const { level } = useContext(ChallengesContext)

  return(
    <div className={styles.profileContainer}>
      <img src={user.avatar_url} alt="profile pic"/>
      <div>
        <h2>{user.name}</h2>
        <p>
          <img src="icons/level.svg" alt="arrow svg"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}