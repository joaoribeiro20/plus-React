import { AppContext } from "./AppContext";
import { useState } from "react";

export default function AppTesteProvider({ children }) {

    const [name, setName] = useState({
        nome: "Joao nome incial",
        idade: 21
    });

    const [count, setCount] = useState(0);


    return (
        <>
            <AppContext.Provider value={{ name, setName, setCount, count }}>
                {children}
            </AppContext.Provider>
        </>
    )
}