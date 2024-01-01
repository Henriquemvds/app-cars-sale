import '../styles/components/FormSell.css'

function FormsSell() {

    return (
        <div>
            <h4>Registro do veículo</h4>
            <div className='alertInfo'>
                <h4>Detalhes do veículo</h4>
                <span>Fornecer informações do veículo</span>
            </div>

            <h4>
                Seu nome completo
            </h4>
            <input placeholder='Insira seu nome completo' className='inputInfo'></input>

            <div className='alignInput'>
                <div>
                    <h4>
                        Endereço de Email
                    </h4>
                    <input placeholder='insira.seu@email.aqui' className='inputInfo'></input>
                </div>
                <div>
                    <h4>
                        Número de telefone
                    </h4>
                    <input placeholder='+(XX) XX XX XX XX' className='inputInfo'></input>
                </div>
            </div>

            <div className='alignInput'>
                <div>
                    <h4>
                        Nome do veículo
                    </h4>
                    <input placeholder='Insira o nome do veículo aqui' className='inputInfo'></input>
                </div>
                <div>
                    <h4>
                        Ano de fabricação
                    </h4>
                    <input placeholder='YYYY' className='inputInfo'></input>
                </div>
            </div>

            <div className='alignInput'>
                <div>
                    <h4>
                        Tipo do veículo
                    </h4>
                    <select className='dropdownInfo'>
                        <option>
                            Selecione o tipo
                        </option>
                    </select>
                </div>
                <div>

                    <h4>
                        Marca do veículo
                    </h4>
                    <select className='dropdownInfo'>
                        <option>
                            Selecione a marca
                        </option>
                    </select>
                </div>
            </div>

            <div className='alignInput'>
                <div>
                    <h4>
                        Preço
                    </h4>
                    <input placeholder='R$00.00' className='inputInfo'></input>
                </div>
                <div>
                    <h4>
                        Condição
                    </h4>

                    <div className='alignRadio'>
                        <input type='radio' />
                        <span>Usado</span>
                        <input type='radio' />
                        <span>Novo</span>
                    </div>
                </div>
            </div>

            <div className='submit'>
                <button>
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default FormsSell;