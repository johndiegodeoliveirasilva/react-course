import { useContext } from "react"
import { Context } from "../contexts/Context"

export const AuthCard = () => {
  const { state, dispatch } = useContext(Context)

  const user = state.user.user
  
  const handleSignIn = () => dispatch({ type: 'SIGNIN', payload: { user: {id: 1, name: 'Gabriel Fernate'} } })
  const handleSignOut = () => dispatch({ type: 'SIGNOUT' })

  return (
    <div>
      {user ? 
      <>
      <div>
        ID: {user.id} <br />
        Nome: {user.name}
      </div>
      <button onClick={handleSignOut}>Deslogar</button>
      </>
      : 
      <>
      <button onClick={handleSignIn}>Logar</button>
      </>}
    </div>
  )
}