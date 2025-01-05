import { useId } from "react";
const App = () => {
  const inputId = useId()
  return (
    <div>
      <label htmlFor={inputId}>Insert something cool on input</label>
      <input placeholder="Digite something" id={inputId}/>
    </div>

    )
}

export default App;