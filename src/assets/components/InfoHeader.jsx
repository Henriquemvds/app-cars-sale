import '../styles/components/InfoHeader.css'

function InfoHeader() {

    return (
        <div>
            <div className='folder'>
                <h2>
                    Principais Escolhas!
                </h2>
            </div>
            <div className='tips'>
                <span>Melhores ofertas: </span>
                <span><b>Procure carros de verão</b></span>
            </div>
            <div className='batch'>
                <h3>Carros ofertados</h3>
                <span>985</span>
            </div>
        </div>
    )
}

export default InfoHeader;