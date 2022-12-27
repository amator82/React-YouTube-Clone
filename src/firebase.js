import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyBG0FWjHogmSm53s5la9KTGqh5t637eApA',
    authDomain: 'ytcloneam82.firebaseapp.com',
    projectId: 'ytcloneam82',
    storageBucket: 'ytcloneam82.appspot.com',
    messagingSenderId: '359388639067',
    appId: '1:359388639067:web:1fb9c3d76a83e3a240747e'
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
