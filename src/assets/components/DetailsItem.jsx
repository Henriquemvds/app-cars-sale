import { useParams } from "react-router-dom";
import axios from 'axios'
import '../styles/components/DetailsItem.css'
import { useEffect, useState } from 'react'

function DetailsItem({ props }) {

    const [seller, setSeller] = useState([])

    let { id_carro } = useParams()

    const getSeller = () => {
        props.map(() => setSeller([...props]))
    }

    const buyCar = () => {
        axios.delete(`http://localhost:3000/carros/excluir-carro/${id_carro}`)
        .then(() => console.log('Comprado!'))
    }

    useEffect(() => {
        getSeller()
    }, [props])


    return (
        <div className='detailsItem'>
            {seller.map((item) => (
                <>
                <div className='alignInfo'>
                        <span><b>Nome do vendedor</b></span>
                        <span>{item.nome_vendedor}</span>
                    </div>
                    <div className='alignInfo'>
                        <span><b>Contato E-mail</b></span>
                        <span>{item.email_vendedor}</span>
                    </div>
                    <div className='alignInfo'>
                        <span><b>Contato telefone</b></span>
                        <span>{item.telefone_vendedor}</span>
                    </div>
                    <div className='alignInfo'>
                        <span><b>Localização</b></span>
                        <span>123 Main Street, Anytown, USA</span>
                    </div> 
                </>
            ))}

            <div className='infoTotal'>
                <span><b>Total de venda</b></span>
                <span>R$100.000,00</span>
                <button onClick={() => buyCar()}>Pagar</button>
            </div>
            <div className='interactionItem'>
                <button>Contate o vendedor</button>
                <button>Cancelar compra</button>
            </div>
        </div>
    )
}

export default DetailsItem;