import firebase from 'firebase/compat/app'
import auth from '../../firebase'
import { AuthAction, AuthActionTypes, Profile } from '../../types/auth'
import { Dispatch } from 'redux'

export const login = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({
            type: AuthActionTypes.LOGIN_REQUEST
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        const res: any = await auth.signInWithPopup(provider)
        const accessToken = res.credential.accessToken

        const profile: Profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture
        }

        sessionStorage.setItem('ytc-access-token', accessToken)
        sessionStorage.setItem('ytc-user', JSON.stringify(profile))

        dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: accessToken
        })

        dispatch({
            type: AuthActionTypes.LOAD_PROFILE,
            payload: profile
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: AuthActionTypes.LOGIN_FAIL,
            payload: error.message
        })
    }
}

export const log_out = () => async (dispatch: Dispatch<AuthAction>) => {
    await auth.signOut()
    dispatch({
        type: AuthActionTypes.LOG_OUT
    })

    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-user')
}
