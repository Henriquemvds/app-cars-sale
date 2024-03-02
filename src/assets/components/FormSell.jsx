import axios from 'axios';
import { useState } from 'react';
import iconImage from '../icons/image.svg'
import '../styles/components/FormSell.css'

function FormsSell() {

    const [image, setImage] = useState(null)
    const [blockedInfoCars, setBlockedInfoCars] = useState(true)
    const [blockedInfoSellers, setBlockedInfoSellers] = useState(false)

    const [sellerInfos, setSellerInfos] = useState({
        cpf_vendedor: null,
        nome_vendedor: null,
        email_vendedor: null,
        telefone_vendedor: null
    })

    const [carInfos, setCarInfo] = useState({
        nome_carro: null,
        ano_carro: null,
        modelo_carro: null,
        marca_carro: null,
        preco_carro: null,
        condicao_carro: null,
        cpf_vendedor: null,
        imagem_carro: null
    })

    const brands = [
        'Aston Martin', 'Audi', 'BMW', 'BYD',
        'CAOA Chery', 'Chevrolet', 'Citroën',
        'Effa', 'Ferrari', 'Fiat', 'Ford', 'Foton',
        'Haval', 'Honda', 'Hyundai', 'Iveco',
        'JAC', 'Jaguar', 'Jeep', 'Kia',
        'Lamborghini', 'Land Rover', 'Lexus', 'Maserati',
        'McLaren', 'Mercedes-AMG', 'Mercedes-Benz', 'Mini',
        'Mitsubishi', 'Nissan', 'Ora',
        'Peugeot', 'Porsche', 'RAM', 'Renault',
        'Rolls-Royce', 'Seres', 'Subaru', 'Suzuki',
        'Toyota', 'Volkswagen', 'Volvo'
    ]
    const models = [
        'Hatch', 'Sedan', 'SUV', 'Picapes', 'Crossover', 'Perua', 'Minivan', 'Esportivo'
    ]

    function registerInfoSeller(tipoInformacao, valor) {

        setSellerInfos({ ...sellerInfos, [tipoInformacao]: valor })

        if (tipoInformacao == 'cpf_vendedor') {
            setCarInfo({ ...carInfos, ['cpf_vendedor']: valor })
        }

    }

    function registerInfoCar(tipoInformacao, valor) {

        setCarInfo({ ...carInfos, [tipoInformacao]: valor })

        if (tipoInformacao == 'imagem_carro') {
            setImage(valor)
            setCarInfo({ ...carInfos, [tipoInformacao]: valor.name })
        }

    }

    const registerSeller = () => {
        axios.post('http://localhost:3000/vendedor/cadastrar-vendedor', sellerInfos)
            .finally(() => {
                alert('Seu cadastro como vendedor foi concluído, agora registre o veículo!')
                setBlockedInfoCars(false)
                setBlockedInfoSellers(true)
            }
            )
    }

    const registerCar = () => {
        axios.post('http://localhost:3000/carros/cadastrar-carro', carInfos)
            .finally(() => {
                uploadFile()
                alert('Seu cadastro fo veículo foi concluído!')
            }
            )
    }

    const uploadFile = () => {
        const formData = new FormData()
        formData.append('image', image)
        axios.post('http://localhost:3000/uploads/cadastrar-imagem', formData)
            .finally(() => console.log('enviado!'))
    }



    return (
        <div>
            <form>

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
                            disabled={blockedInfoSellers}
                            onChange={(e) => registerInfoSeller("cpf_vendedor", e.target.value)}
                        ></input>
                    </div>
                    <div>

                        <h4>
                            Seu nome completo
                        </h4>
                        <input placeholder='Insira seu nome completo' className='inputInfo'
                            disabled={blockedInfoSellers}
                            onChange={(e) => registerInfoSeller("nome_vendedor", e.target.value)}
                        ></input>
                    </div>

                    <div>

                        <h4>
                            Endereço de Email
                        </h4>
                        <input placeholder='insira.seu@email.aqui' className='inputInfo'
                            disabled={blockedInfoSellers}
                            onChange={(e) => registerInfoSeller("email_vendedor", e.target.value)}></input>
                    </div>

                    <div>
                        <h4>
                            Número de telefone
                        </h4>
                        <input placeholder='+(XX) XX XX XX XX' className='inputInfo'
                            disabled={blockedInfoSellers}
                            onChange={(e) => registerInfoSeller("telefone_vendedor", e.target.value)}></input>
                    </div>


                </div>
                <div className='submit'>
                    <button type='button' onClick={registerSeller}>
                        Enviar
                    </button>

                </div>
                <div className='alignInput'>
                    <div>
                        <h4>
                            Nome do veículo
                        </h4>
                        <input placeholder='Insira o nome do veículo aqui' className='inputInfo'
                            disabled={blockedInfoCars}
                            onChange={(e) => registerInfoCar("nome_carro", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <h4>
                            Ano de fabricação
                        </h4>
                        <input placeholder='YYYY' className='inputInfo'
                            disabled={blockedInfoCars}
                            onChange={(e) => registerInfoCar("ano_carro", e.target.value)}></input>
                    </div>

                    <div>
                        <h4>
                            Tipo do veículo
                        </h4>
                        <select className='dropdownInfo'
                            disabled={blockedInfoCars}
                            onChange={(e) => registerInfoCar("modelo_carro", e.target.value)}>
                            <option>
                                Selecione o tipo
                            </option>
                            {models.map((item) => (
                                <>
                                    <option value={item}>{item}</option>
                                </>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h4>
                            Marca do veículo
                        </h4>
                        <select className='dropdownInfo'
                            disabled={blockedInfoCars}
                            onChange={(e) => registerInfoCar("marca_carro", e.target.value)}>
                            <option>
                                Selecione a marca
                            </option>
                            {brands.map((item) => (
                                <>
                                    <option value={item}>{item}</option>
                                </>
                            ))}
                        </select>
                    </div>

                    <div>
                        <h4>
                            Preço
                        </h4>
                        <input placeholder='R$00.00' className='inputInfo'
                            disabled={blockedInfoCars}
                            onChange={(e) => registerInfoCar("preco_carro", e.target.value)}></input>
                    </div>

                    <div>
                        <h4>
                            Condição
                        </h4>
                        <div className='alignRadio'>
                            <input name="condicao_carro" type='radio' value='Usado'
                                disabled={blockedInfoCars}
                                onChange={(e) => registerInfoCar("condicao_carro", e.target.value)} />
                            <span>Usado</span>

                            <input name="condicao_carro" type='radio' value='Novo'
                                disabled={blockedInfoCars}
                                onChange={(e) => registerInfoCar("condicao_carro", e.target.value)} />
                            <span>Novo</span>
                        </div>

                    </div>
                    <div className='fileInfo'>
                        <label for="file" className='inputFileInfo'>Selecione o arquivo</label>
                        <input type="file"  disabled={blockedInfoCars} onChange={(e) => registerInfoCar("imagem_carro", e.target.files[0])} accept="application/jpg" name='image' id="file" />
                            {carInfos.imagem_carro}
                        {image ?
                            <label className='imageInfo' for="file" >
                                <img src={URL.createObjectURL(image)} width='200px' height='200px' alt="Imagem" />
                            </label>
                            :
                            <label className='imageInfo' for="file"  disabled={blockedInfoCars}>
                                <img src={iconImage} width='200px' height='200px'/>
                            </label>
                        }
                    </div>
                </div>

                <div className='submit'>
                    <button type='button' onClick={registerCar}>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormsSell;