import { useReducer, useState } from "react";

type TasksState = string[]
type TasksAction = {
  type: 'ADD_TASK',
  payload: string
}

const reducer = (state: TasksState, action: TasksAction) => {
  if (action.type === 'ADD_TASK' && action.payload != '') {
    return [...state, action.payload]
  }
  return state
}

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, [])
  const [inputValue, setInputValue] = useState('')

  const handClick = () => {
    dispatch({ type: 'ADD_TASK', payload: inputValue })
  }

  return (
    <div>

      <input 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)
      }/>

      <button onClick={handClick}>
        New task
      </button>

      <ul>
        { tasks.map((task, key) => (
          <li key={key}>{task}</li>
        ))}

      </ul>

    </div>
  );
}

export default App;