import { useParams } from "react-router-dom"

function CategoriesDetails() {

    let { id_video } = useParams()
    return (
        <section>
            <div>
                <h1>Carros em lote: </h1>
                <h3>
                    Área: {id_video}
                </h3>
                <div>
                    <span>
                        Localização:
                    </span>
                    <span>
                        foto:
                    </span>
                    <span>
                        Nome:
                    </span>
                    <span>
                        Modelo:
                    </span>
                    <span>
                        Marca (peças importadas ou nacionais):
                    </span>
                    <span>
                        Preço:
                    </span>
                    <span>
                        Ano:
                    </span>
                    <span>
                        Categoria (Combustível):
                        Gasolina e Álcool (flex)
                        Gasolina e elétrico (híbrido)
                    </span>
                    <span>
                        Completo (sim ou não): 
                    </span>
                    <span>
                        Novo:  
                    </span>
                </div>
            </div>
        </section>

    )
}

export default CategoriesDetails;