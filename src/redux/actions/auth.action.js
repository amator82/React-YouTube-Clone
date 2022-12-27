import firebase from 'firebase/compat/app'
import auth from '../../firebase'

export const login = () => async (dispatch) => {
    try {
        const provider = new firebase.auth.GoogleAuthProvider()
        console.log(provider)
        const res = await auth.signInWithPopup(provider)
        console.log(res, 'res')
    } catch (error) {}
}
