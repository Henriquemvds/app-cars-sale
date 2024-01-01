import '../styles/DetailsItem.css'


function DetailsItem() {

    return (
        <div className='detailsItem'>
            <div className='alignInfo'>
                <span><b>Localização</b></span>
                <span>123 Main Street, Anytown, USA</span>
            </div>
            <div className='alignInfo'>
                <span><b>Contato E-mail</b></span>
                <span>info@example.com</span>
            </div>
            <div className='alignInfo'>
                <span><b>Contato telefone</b></span>
                <span>+1 123 456 7890</span>
            </div>

            <div className='infoTotal'>
                <span><b>Total de venda</b></span>
                <span>R$100.000,00</span>
                <button>Pagar</button>
            </div>
            <div className='interactionItem'>
                <button>Contate o vendedor</button>
                <button>Cancelar compra</button>
            </div>
        </div>
    )
}

export default DetailsItem;