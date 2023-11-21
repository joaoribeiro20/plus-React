import { useState, createContext } from 'react'
import Child from './components/Child'

export const testeContext = createContext()
export const teste2Context = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h2> texto do componete App</h2>
       {/*  <testeContext.Provider value={3}>
          <Child/>
        </testeContext.Provider> */}
        <teste2Context.Provider value={{count, setCount}}>
          <Child/>
        </teste2Context.Provider>
    </>
  )
}

export default App
