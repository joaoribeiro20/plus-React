import Proptypes from "prop-types";

function Titulo({ idade, paragrafo }) {
    let nome = "Joao Ribeiro"
    let urlImg = ''

    return (
        <div>
            <h1>Hello, Word!! e {nome}</h1>
            <h3>idade: {idade ? idade : "idade nao fornecida"}</h3>

            <img width={100} src={urlImg} alt="Imagem" />
            {paragrafo ?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod dolore reiciendis voluptate</p>
                :
                <p>a</p>
            }
        </div>
    )
}


export default Titulo


Titulo.propTypes = {
    idade: Proptypes.string,
    paragrafo: Proptypes.string,
}
