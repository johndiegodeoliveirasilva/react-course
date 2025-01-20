type User = {
  id: number,
  name: string
}

// Initial State
export type UserState = {
  user: {
    id: number, 
    name: string,
  } | null
}

// Actions
type SignInUser = {
  type: 'SIGNIN',
  payload: { user: User }
}

type SignOutUser = {
  type: 'SIGNOUT'
}

// Export all actions
export type UserAction = SignInUser | SignOutUser;