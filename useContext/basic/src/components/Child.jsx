import { useContext } from "react";
import { testeContext, teste2Context } from "../App";
import TwoChild from "./TwoChild";

const Child = () => {
/*     const context = useContext(testeContext) */
const { count } = useContext(teste2Context)

    return(
        <div>
            
            <h1>valor do componente Child: {count}</h1>
            <TwoChild/>
        </div>
    )
}

export default Child