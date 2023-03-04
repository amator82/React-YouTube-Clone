export type Profile = {
    name?: string
    photoURL?: string
}

export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOAD_PROFILE = 'LOAD_PROFILE',
    LOG_OUT = 'LOGIN_OUT'
}

export interface AuthState {
    accessToken: string | null
    user: Profile[]
    loading: boolean
}

interface FetchLoginRequestAction {
    type: AuthActionTypes.LOGIN_REQUEST
}

interface FetchLoginSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS
    payload: string | null
}

interface FetchLoginErrorAction {
    type: AuthActionTypes.LOGIN_FAIL
    payload: string
}

interface FetchLoadProfileAction {
    type: AuthActionTypes.LOAD_PROFILE
    payload: Profile
}

interface FetchLoginOutAction {
    type: AuthActionTypes.LOG_OUT
}

export type AuthAction =
    | FetchLoginRequestAction
    | FetchLoginSuccessAction
    | FetchLoginErrorAction
    | FetchLoadProfileAction
    | FetchLoginOutAction
