import './App.css'
import Titulo from './components/Titulo'
//import bodyPage from './components/bodyPage'


function App() {
  return(
    <>
    <div>
      {/* <div id='teste'>
      <bodyPage/>
      </div> */}
      
  

      <div id='teste'>
        <p>div main</p>
         <Titulo idade='21' paragrafo={true}/>
         <Titulo/>
      </div>
       
        <Titulo/>
       
    </div>
  
    </>
    
  )
   
}

export default App