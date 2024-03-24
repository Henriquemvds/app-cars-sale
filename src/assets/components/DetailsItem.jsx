import { useParams } from "react-router-dom";
import axios from 'axios'
import '../styles/components/DetailsItem.css'
import { useEffect, useState } from 'react'

function DetailsItem({ props }) {

    let { id_automovel } = useParams()

    const buyCar = () => {
        axios.delete(`https://api-cars-sale-blue.vercel.app/automoveis/excluir-automovel/${id_automovel}`)
        .then(() => console.log('Comprado!'))
    }


    return (
        <div className='detailsItem'>
                <div className='alignInfo'>
                        <span><b>Nome do vendedor</b></span>
                        <span>a</span>
                    </div>
                    <div className='alignInfo'>
                        <span><b>Contato E-mail</b></span>
                        <span>a</span>
                    </div>
                    <div className='alignInfo'>
                        <span><b>Contato telefone</b></span>
                        <span>a</span>
                    </div>
                    <div className='alignInfo'>
                        <span><b>Localização</b></span>
                        <span>123 Main Street, Anytown, USA</span>
                    </div> 

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