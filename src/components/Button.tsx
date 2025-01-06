import { useContext } from "react"
import { ThemeContext } from "../App"

export const Button = () => {
  const { theme, setTheme}  = useContext(ThemeContext)

  return (
    <div>
      <div>
        My theme is: {theme}
      </div>
      {theme == 'black' ?
        <button onClick={() => setTheme('white')}>Change to write</button> :
        <button onClick={() => setTheme('black')}>Change to dark</button>
      }

      
      
    </div>
  )
}