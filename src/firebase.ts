import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

interface FirebaseConfig {
    apiKey: string | undefined
    authDomain: string | undefined
    projectId: string | undefined
    storageBucket: string | undefined
    messagingSenderId: string | undefined
    appId: string | undefined
}

const firebaseConfig: FirebaseConfig = {
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MES_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
