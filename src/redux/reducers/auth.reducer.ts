import { AuthAction, AuthActionTypes, AuthState } from '../../types/auth'

const initialState: AuthState = {
    accessToken: sessionStorage.getItem('ytc-access-token')
        ? sessionStorage.getItem('ytc-access-token')
        : null,
    user: sessionStorage.getItem('ytc-user')
        ? JSON.parse(sessionStorage.getItem('ytc-user')!)
        : null,
    loading: false
}

export const authReducer = (prevState = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true
            }
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...prevState,
                accessToken: action.payload,
                loading: false
            }
        }
        case AuthActionTypes.LOGIN_FAIL: {
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error: action.payload
            }
        }
        case AuthActionTypes.LOAD_PROFILE: {
            return {
                ...prevState,
                user: action.payload
            }
        }
        case AuthActionTypes.LOG_OUT: {
            return {
                ...prevState,
                accessToken: null,
                user: null
            }
        }
        default:
            return prevState
    }
}
