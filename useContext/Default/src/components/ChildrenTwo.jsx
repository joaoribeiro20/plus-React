import useAppContext from "../hooks/useAppContext"

export default function ChieldrenTwo(){
    const {setName, setCount, count } = useAppContext()
    function teste(){
        setName({
            nome: "Maria",
            idade: 25
        });
        
    }
    return(
        <>
        <button onClick={teste}>Mude o nome</button>
        
        <button onClick={()=>{
            setCount(count + 1)
        }}>Incremento</button>
        <button onClick={()=>{
            setCount(count - 1)
        }}>decremento</button>
        </>
        
    )
}