import { ChallengesProvider } from '../context/ChallengesContext'
import { CoundownProvider } from '../context/CoundownContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CoundownProvider>
        <Component {...pageProps} />
      </CoundownProvider>
    </ChallengesProvider>
  )
}

export default MyApp
