import {
  AuthActionTypes,
  AuthState,
  LoginState,
  LOG_IN,
  SIGN_IN,
} from "./types"

export function signIn(authData: AuthState): AuthActionTypes {
  return {
    type: SIGN_IN,
    payload: authData,
  }
}

export function logIn(authData: LoginState): AuthActionTypes {
  return {
    type: LOG_IN,
    payload: authData,
  }
}
