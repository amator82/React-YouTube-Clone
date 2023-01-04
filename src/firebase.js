import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    // authDomain: 'react--clone-7b813.firebaseapp.com',
    // projectId: 'react--clone-7b813',
    // storageBucket: 'react--clone-7b813.appspot.com',
    // messagingSenderId: '7583969892',
    // appId: '1:7583969892:web:61f128be66aee7db85e571'
    authDomain: "ytcloneam82.firebaseapp.com",
    projectId: "ytcloneam82",
    storageBucket: "ytcloneam82.appspot.com",
    messagingSenderId: "359388639067",
    appId: "1:359388639067:web:1fb9c3d76a83e3a240747e"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
