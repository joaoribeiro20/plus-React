import { useState } from 'react'
import ChildrenOne from './components/ChildrenOne'
import AppTesteProvider from './context/AppProvider'
import ChieldrenTwo from './components/ChildrenTwo'


function App() {


  return (
    <>
      <AppTesteProvider>
        <ChildrenOne />
        <ChieldrenTwo />
      </AppTesteProvider>
    </>
  )
}

export default App
