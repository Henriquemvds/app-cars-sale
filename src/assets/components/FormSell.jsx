import  axios  from 'axios';
import { useState } from 'react';
import '../styles/components/FormSell.css'

function FormsSell() {

    const [sellerInfos, setSellerInfos] = useState({
        cpf_vendedor: null,
        nome_vendedor: null,
        email_vendedor: null, 
        telefone_vendedor: null
    })

    function registerInfo(tipoInformacao, valor) {

        setSellerInfos({ ...sellerInfos, [tipoInformacao]: valor })

    }

    const registerSeller = () => {
        axios.post('http://localhost:3000/vendedor/cadastrar-vendedor', sellerInfos)
        .finally(() => alert('cadastrado'))
    }


console.log(sellerInfos)

    return (
        <div>
            <h4>Registro do veículo</h4>
            <div className='alertInfo'>
                <h4>Detalhes do veículo</h4>
                <span>Fornecer informações do veículo</span>
            </div>
            <div className='alignInput'>
                <div>

                    <h4>
                        Seu CPF
                    </h4>
                    <input placeholder='Insira seu CPF' className='inputInfo'
                      onChange={(evento) => registerInfo("cpf_vendedor", evento.target.value)}
                    ></input>
                </div>
                <div>

                    <h4>
                        Seu nome completo
                    </h4>
                    <input placeholder='Insira seu nome completo' className='inputInfo'
                      onChange={(evento) => registerInfo("nome_vendedor", evento.target.value)}
                    ></input>
                </div>

                <div>

                    <h4>
                        Endereço de Email
                    </h4>
                    <input placeholder='insira.seu@email.aqui' className='inputInfo'
                      onChange={(evento) => registerInfo("email_vendedor", evento.target.value)}></input>
                </div>

                <div>
                    <h4>
                        Número de telefone
                    </h4>
                    <input placeholder='+(XX) XX XX XX XX' className='inputInfo'
                      onChange={(evento) => registerInfo("telefone_vendedor", evento.target.value)}></input>
                </div>

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
                <button onClick={registerSeller}>
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default FormsSell;