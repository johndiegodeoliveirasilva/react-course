import { useRef } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    const current = inputRef.current;

    if (!current) return; 

    current.focus();
  }
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={handleClick}>Click me</button>
     
    </div>

  );
}

export default App;