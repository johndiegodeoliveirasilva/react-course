import { createContext, useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

type ThemeContextType = {
  theme: string,
  setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({theme: '', setTheme: () => {}})

const App = () => {
  const [theme, setTheme] = useState('black')
  return (
   <ThemeContext.Provider value={{theme, setTheme}}>
      <Button />
      <Card />
   </ThemeContext.Provider>
  );
}

export default App;