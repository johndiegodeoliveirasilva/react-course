import { ThemeAction } from "../types/ThemReducer"
import { UserAction } from "../types/UserReducer"
import { themeInitialState, themeReducer } from "./reducers/themeReducer"
import { userInicialState, userReducer } from "./reducers/userReducer"

// Exporting all initial states
export const InitialState = {
  theme: themeInitialState,
  user: userInicialState
}

// Exporting all reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
  theme: themeReducer(state.theme, action),
  user: userReducer(state.user, action)
})

// Exporting all types
export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction | UserAction
