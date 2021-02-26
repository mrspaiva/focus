import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/mrspaiva.png" alt="profile pic"/>
      <div>
        <h2>Natalia Rebello Paiva</h2>
        <p>
          <img src="icons/level.svg" alt="arrow svg"/>
          Level 1
        </p>
      </div>
    </div>
  )
}