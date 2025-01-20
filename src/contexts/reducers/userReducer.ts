import { UserState } from "../../types/UserReducer";
import { ActionType } from "../config";

export const userInicialState: UserState = {
  user: null,
}

export const userReducer = (state: UserState, action: ActionType): UserState => {
  switch (action.type) {
    case 'SIGNIN':
      return action.payload

    case 'SIGNOUT':
      return userInicialState

      default:
      return state
  }
}