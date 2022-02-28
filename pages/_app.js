import '../styles/globals.css'
import Amplify from 'aws-amplify'
import awsConfigure from '../src/aws-exports'
Amplify.configure(awsConfigure )

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
