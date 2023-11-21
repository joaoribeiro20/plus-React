
import useAppContext from "../hooks/useAppContext"

export default function ChieldrenOne(){
    const {name, count } = useAppContext()
    return (
        <div>
            <p>{name.nome}</p>
            <p>{name.idade}</p>
            <h3>{count}</h3>
        </div>
    )
}