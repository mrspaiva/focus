import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ExperienceBar } from "../components/ExperienceBar";
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import styles from '../styles/pages/Home.module.css';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

export default function Home(props) {
  console.log(props)

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Focus</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />  
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: { 
      level, 
      currentExperience, 
      challengesCompleted 
    }
  }
}
