import { useContext } from "react"
import { ThemeContext } from "../App"

export const Card = () => {
  const { theme} = useContext(ThemeContext)
  return (
    <div>
      <div style={{ background: theme, height: 400, width: 400, border: `solid red`}}></div>
    </div>
  )
}
