export const SIGN_IN = "SIGN_IN"
export const LOG_IN = "LOG_IN"

export interface AuthState {
  login: string
  email: string
}

export interface LoginState {
  userName: string
  password: string
}

interface SignInAction {
  type: typeof SIGN_IN
  payload: AuthState
}

interface LogInAction {
  type: typeof LOG_IN
  payload: LoginState
}

export type AuthActionTypes = SignInAction | LogInAction
