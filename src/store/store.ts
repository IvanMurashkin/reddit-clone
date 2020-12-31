import { applyMiddleware, combineReducers, createStore } from "redux"
import { authReducer } from "./auth/reducers"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  auth: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export default store
