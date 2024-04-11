import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/components/BuyItem.css'
import iconCorrect from '../icons/correct.svg'
import { useEffect, useState } from 'react'

function BuyItem() {
    const [vehicle, setVehicle] = useState([])
    const [method, setMethod] = useState('0')
    const [price, setPrice] = useState('R$0')
    const [price3, setPrice3] = useState('')
    const [price6, setPrice6] = useState('')
    const [price12, setPrice12] = useState('')
    const [price24, setPrice24] = useState('')
    const [price36, setPrice36] = useState('')
    const [price48, setPrice48] = useState('')
    let paymentInitial = 10000
    let feesYear1 = 0.28
    let feesYear2 = 0.56
    let feesYear3 = 0.84
    let feesYear4 = 1.12

    let { id_automovel } = useParams()

    const getVehicle = () => {
        axios.get(`https://api-cars-sale-blue.vercel.app/automoveis/${id_automovel}`)
            .then((response) => setVehicle(response.data))
    }

    const buyCar = () => {
        if (method == 0) {
            alert('Selecione a forma de pagamento')
        } else {
           axios.delete(`https://api-cars-sale-blue.vercel.app/automoveis/excluir-automovel/${id_automovel}`)
                .then(() => alert('Veículo comprado!'))
              
        }
    }

    useEffect(() => {
        if (method == 0) {
            setPrice('R$0')
            setPrice3('')
            setPrice6('')
            setPrice12('')
            setPrice24('')
            setPrice36('')
            setPrice48('')
        } else if (method == 1) {
            vehicle.map((item) => {
                if (item.preco_automovel <= 30000) {
                    paymentInitial = 5000
                } else {
                    paymentInitial = 10000
                }
                let installment3 = (item.preco_automovel - paymentInitial) / 3
                let installment6 = (item.preco_automovel - paymentInitial) / 6
                let installment12 = ((item.preco_automovel - paymentInitial) + (feesYear1 * item.preco_automovel)) / 12
                let installment24 = ((item.preco_automovel - paymentInitial) + (feesYear2 * item.preco_automovel)) / 24
                let installment36 = ((item.preco_automovel - paymentInitial) + (feesYear3 * item.preco_automovel)) / 36
                let installment48 = ((item.preco_automovel - paymentInitial) + (feesYear4 * item.preco_automovel)) / 48

                setPrice(`Com ${paymentInitial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de entrada ficando por: `)
                if (installment3 <= 0) {
                    setPrice3('')
                } else {
                    setPrice3(`3x de ${installment3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de ${(item.preco_automovel - paymentInitial).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
                if (installment6 <= 0) {
                    setPrice6('')
                } else {
                    setPrice6(`6x de ${installment6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de ${(item.preco_automovel - paymentInitial).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
                if (installment12 <= 0) {
                    setPrice12('')
                } else {
                    setPrice12(`12x de ${installment12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de ${((item.preco_automovel - paymentInitial) + (feesYear1 * item.preco_automovel)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
                if (installment24 <= 0) {
                    setPrice24('')
                } else {
                    setPrice24(`24x de ${installment24.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de ${((item.preco_automovel - paymentInitial) + (feesYear2 * item.preco_automovel)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
                if (installment36 <= 0) {
                    setPrice36('')
                } else {
                    setPrice36(`36x de ${installment36.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de ${((item.preco_automovel - paymentInitial) + (feesYear3 * item.preco_automovel)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
                if (installment48 <= 0) {
                    setPrice48('')
                } else {
                    setPrice48(`48x de ${installment48.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de ${((item.preco_automovel - paymentInitial) + (feesYear4 * item.preco_automovel)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                }
            }
            )
        } else if (method == 2 || method == 3) {
            vehicle.map((item) => {
                let installment = item.preco_automovel - item.preco_automovel * 0.1
                setPrice(`${installment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
                setPrice3('')
                setPrice6('')
                setPrice12('')
                setPrice24('')
                setPrice36('')
                setPrice48('')
            })
        }
    }, [method])

    useEffect(() => {
        getVehicle()
    }, [])

    return (
        <div>
         
            <div className='detailsSelect'>
                {vehicle.map((item) => (
                    <>
                        <figure className='itemSelect'>
                            <img src={item.imagem_automovel} className='carExampleBuy' />
                            <div className='vehiclePresentation'>
                                <h4>{item.nome_automovel}</h4>
                                <span>
                                    <b>Tipo:</b> {item.modelo_automovel},
                                    <b>Marca:</b> {item.marca_automovel},
                                    <b>Ano:</b> {item.ano_automovel},
                                    <b>Km: </b>{item.quilometragem_automovel}</span>
                            </div>
                            <div className='infoPrice'>
                                <span><b>Preço</b></span>
                                <span>{item.preco_automovel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                            <div className='infoMethod'>
                                <span><b>Método de pagamento</b></span>
                                <select className='dropdown' onChange={e => setMethod(e.target.value)}>
                                    <option value='0'>Selecione a forma</option>
                                    <option value='1'>Crédito</option>
                                    <option value='2'>Débito</option>
                                    <option value='3'>Pix</option>
                                </select>
                            </div>
                            <span>Detalhes da compra</span>
                        </figure>
                    </>
                ))}
                <div className='buyConfirmed'>
                    <img src={iconCorrect} className='iconCorrect' />
                    <span><b>É sempre um prazer fazer negócios com você!</b></span>
                </div>
            </div>



            <div className='detailsItem'>
                <div className='alignInfo'>
                    <span><b>Nome do vendedor</b></span>
                    <span>Henrique Santos</span>
                </div>
                <div className='alignInfo'>
                    <span><b>Contato E-mail</b></span>
                    <span>henriquem.vdossantos@gmail.com</span>
                </div>
                <div className='alignInfo'>
                    <span><b>Localização</b></span>
                    <span>123 Main Street, Anytown, USA</span>
                </div>

                <div className='infoTotal'>
                    <span><b>Total de venda</b></span>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>{price}</span>
                        <span>{price3}</span>
                        <span>{price6}</span>
                        <span>{price12}</span>
                        <span>{price24}</span>
                        <span>{price36}</span>
                        <span>{price48}</span>
                    </div>
                    <button onClick={() => buyCar()}>Pagar</button>
                </div>
                <div className='interactionItem'>
                    <button>Contate o vendedor</button>
                    <button>Cancelar compra</button>
                </div>
            </div>
        </div>

    )
}

export default BuyItem;