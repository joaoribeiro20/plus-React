import { useState } from "react"


function Titulo(){
    const[texto,setTexto] = useState("texto inicial")
    const[inputText,setInputText] = useState("")

        function clicou(){
           
            setTexto(inputText)
        }

    return(
        <div>
            <div>
                <h1>{texto}</h1>
            <button onClick={()=>{setTexto("mudei via botão")}}>mudar</button>
            </div>
            <div>
                <h2></h2>
                <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
                <button onClick={clicou}>atualizar input</button>
            </div>
        </div>
    )
}

export default Titulo