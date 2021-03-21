import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import styles from '../styles/pages/Home.module.css';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import { ChallengesProvider } from '../context/ChallengesContext';
import { CountdownProvider } from '../context/CountdownContext';

interface userGit {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: userGit;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { user } = props

  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}
    >

      <div className={styles.container}>
        <Head>
          <title>{user.name} | Focus</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile {...user}/>
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />  
            </div>
          </section>
        </CountdownProvider>
      </div>

    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.params
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user = await response.json()

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: { 
      user,
      level: Number(level),
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted),
    }
  }
}