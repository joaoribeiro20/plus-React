import { useContext } from "react";
import { teste2Context, testeContext } from "../App";

const TwoChild = () =>{
    /* const context = useContext(testeContext) */
    const { count, setCount } = useContext(teste2Context)
    return(
        <div>
            {/* <h2>{context}</h2> */}
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count + 1) 
            }}
            >Incremento</button>
        </div>
    )
}

export default TwoChild