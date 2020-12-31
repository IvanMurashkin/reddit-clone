import {
  AuthActionTypes,
  AuthState,
  LoginState,
  LOG_IN,
  SIGN_IN,
} from "./types"

const initialState: LoginState = {
  userName: "",
  password: "",
}

export function authReducer(
  state = initialState,
  action: AuthActionTypes,
): AuthState | LoginState {
  switch (action.type) {
    case SIGN_IN:
      return { ...action.payload }
    case LOG_IN:
      return { ...action.payload }
    default:
      return state
  }
}
