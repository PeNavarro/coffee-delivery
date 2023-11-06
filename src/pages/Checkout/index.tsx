import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CheckoutContainer, OrderData, CartData, FormContainer, BoxContainer, PaymentOptions, CartBox } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { CartCoffeeCard, CoffeeCardInterface } from "../../components/CartCoffeeCard";

interface CepData{
    cep: string,
    state: string,
    city: string,
    neighborhood: string,
    street: string
}

export function Checkout(){
    const { coffeeCart } = useContext(CartContext)
    const [ streetForm, setStreetForm ] = useState('')
    const [ numberForm, setNumberForm ] = useState('')
    const [ complementForm, setComplementForm ] = useState('')
    const [ neighborhoodForm, setNeighborhoodForm ] = useState('')
    const [ cityForm, setCityForm ] = useState('')
    const [ stateForm, setStateForm ] = useState('')

    const [ totalCoffeesPrice, setTotalCoffeesPrice ] = useState(0)
    
    useEffect(() => {
        const allCoffeesPrice = coffeeCart.reduce((totalPrice, coffee) => {
            return totalPrice + coffee.coffee.price * coffee.coffeeQuantity;
        }, 0);

        console.log(allCoffeesPrice)
    }, [coffeeCart])    

    // var totalCoffeesPriceFormatted = totalCoffeesPrice.toFixed(2).toString().replace(".", ",")

    function getAddressFromCep(event: ChangeEvent<HTMLInputElement>){
        if(event.target.value.length >= 8){
            fetch(`https://brasilapi.com.br/api/cep/v1/${event.target.value}`)
            .then(response => response.json())
            .then((data: CepData) => {
                setStreetForm(data.street)
                setNeighborhoodForm(data.neighborhood)
                setCityForm(data.city)
                setStateForm(data.state)
            })
            .catch(error => {
                console.error('Ocorreu um erro ao tentar buscar o CEP :( \n\n'+error)
            })
        }
    }

    return(
        <CheckoutContainer>
            <OrderData>
                <h1>Complete seu pedido</h1>

                <BoxContainer>
                    <div className="boxTitle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.125 19.9375C4.125 19.5578 4.4328 19.25 4.8125 19.25H17.1875C17.5672 19.25 17.875 19.5578 17.875 19.9375C17.875 20.3172 17.5672 20.625 17.1875 20.625H4.8125C4.4328 20.625 4.125 20.3172 4.125 19.9375Z" fill="#C47F17"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 6.875C9.86091 6.875 8.9375 7.79841 8.9375 8.9375C8.9375 10.0766 9.86091 11 11 11C12.1391 11 13.0625 10.0766 13.0625 8.9375C13.0625 7.79841 12.1391 6.875 11 6.875ZM7.5625 8.9375C7.5625 7.03902 9.10152 5.5 11 5.5C12.8985 5.5 14.4375 7.03902 14.4375 8.9375C14.4375 10.836 12.8985 12.375 11 12.375C9.10152 12.375 7.5625 10.836 7.5625 8.9375Z" fill="#C47F17"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 2.75C9.35897 2.75 7.78516 3.4019 6.62478 4.56228C5.4644 5.72266 4.8125 7.29647 4.8125 8.9375C4.8125 11.7837 6.4019 14.3754 8.08129 16.3067C8.91259 17.2627 9.74566 18.0335 10.371 18.565C10.6184 18.7753 10.8324 18.9474 11 19.0781C11.1676 18.9474 11.3816 18.7753 11.629 18.565C12.2543 18.0335 13.0874 17.2627 13.9187 16.3067C15.5981 14.3754 17.1875 11.7837 17.1875 8.9375C17.1875 7.29647 16.5356 5.72266 15.3752 4.56228C14.2148 3.4019 12.641 2.75 11 2.75ZM11 19.9375C10.6057 20.5007 10.6056 20.5006 10.6053 20.5004L10.6048 20.5L10.6032 20.4989L10.5981 20.4953L10.5806 20.4829C10.5657 20.4723 10.5445 20.457 10.5174 20.4372C10.4632 20.3977 10.3853 20.3399 10.2871 20.2649C10.0908 20.1148 9.81284 19.8952 9.48052 19.6127C8.81684 19.0486 7.93116 18.2295 7.04371 17.2089C5.28561 15.1871 3.4375 12.2788 3.4375 8.9375C3.4375 6.9318 4.23426 5.00825 5.6525 3.59C7.07075 2.17176 8.9943 1.375 11 1.375C13.0057 1.375 14.9293 2.17176 16.3475 3.59C17.7657 5.00825 18.5625 6.9318 18.5625 8.9375C18.5625 12.2788 16.7144 15.1871 14.9563 17.2089C14.0688 18.2295 13.1832 19.0486 12.5195 19.6127C12.1872 19.8952 11.9092 20.1148 11.7129 20.2649C11.6147 20.3399 11.5368 20.3977 11.4826 20.4372C11.4555 20.457 11.4343 20.4723 11.4194 20.4829L11.4019 20.4953L11.3968 20.4989L11.3952 20.5L11.3947 20.5004C11.3944 20.5006 11.3943 20.5007 11 19.9375ZM11 19.9375L11.3943 20.5007C11.1575 20.6664 10.8425 20.6664 10.6057 20.5007L11 19.9375Z" fill="#C47F17"/>
                        </svg>
                        <div>
                            <h3>Endereço de Entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <form>
                        <FormContainer>
                            <input type="text" name="zip" id="zip" placeholder="CEP" onChange={(e) => getAddressFromCep(e)} maxLength={9} required/>

                            <input type="text" name="street" id="street" placeholder="Rua" onChange={(e) => setStreetForm(e.target.value)} value={streetForm} required/>

                            <div>
                                <input type="text" name="number" id="number" placeholder="Número" onChange={(e) => setNumberForm(e.target.value)} value={numberForm} required/>

                                <input className="inputWithHelperText" type="text" name="complement" id="complement" placeholder="Complemento" onChange={(e) => setComplementForm(e.target.value)} value={complementForm} required/>
                                <input className="helperText" type="text" value="Opcional" disabled/>
                            </div>

                            <div>
                                <input type="text" name="neighborhood" id="neighborhood" placeholder="Bairro" onChange={(e) => setNeighborhoodForm(e.target.value)}  value={neighborhoodForm} required/>
                                <input type="text" name="city" id="city" placeholder="Cidade" value={cityForm} onChange={(e) => setCityForm(e.target.value)}  required/>
                                <input className="stateInput" type="text" name="state" id="state" placeholder="UF" onChange={(e) => setStateForm(e.target.value)}  value={stateForm} required/>
                            </div>
                        </FormContainer>
                    </form>
                </BoxContainer>

                <BoxContainer>
                    <div className="boxTitle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 1.375C11.3797 1.375 11.6875 1.6828 11.6875 2.0625V19.9375C11.6875 20.3172 11.3797 20.625 11 20.625C10.6203 20.625 10.3125 20.3172 10.3125 19.9375V2.0625C10.3125 1.6828 10.6203 1.375 11 1.375Z" fill="#8047F8"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.36443 4.64568C7.13802 3.8721 8.18723 3.4375 9.28125 3.4375H12.375C12.9167 3.4375 13.4531 3.5442 13.9536 3.7515C14.454 3.9588 14.9088 4.26264 15.2918 4.64568C15.6749 5.02873 15.9787 5.48346 16.186 5.98393C16.3933 6.4844 16.5 7.0208 16.5 7.5625C16.5 7.9422 16.1922 8.25 15.8125 8.25C15.4328 8.25 15.125 7.9422 15.125 7.5625C15.125 7.20136 15.0539 6.84377 14.9157 6.51012C14.7775 6.17648 14.5749 5.87332 14.3195 5.61796C14.0642 5.3626 13.761 5.16003 13.4274 5.02183C13.0937 4.88363 12.7361 4.8125 12.375 4.8125H9.28125C8.5519 4.8125 7.85243 5.10223 7.33671 5.61796C6.82098 6.13368 6.53125 6.83315 6.53125 7.5625C6.53125 8.29185 6.82098 8.99132 7.33671 9.50704C7.85243 10.0228 8.5519 10.3125 9.28125 10.3125H13.0625C14.1565 10.3125 15.2057 10.7471 15.9793 11.5207C16.7529 12.2943 17.1875 13.3435 17.1875 14.4375C17.1875 15.5315 16.7529 16.5807 15.9793 17.3543C15.2057 18.1279 14.1565 18.5625 13.0625 18.5625H8.9375C7.84348 18.5625 6.79427 18.1279 6.02068 17.3543C5.2471 16.5807 4.8125 15.5315 4.8125 14.4375C4.8125 14.0578 5.1203 13.75 5.5 13.75C5.8797 13.75 6.1875 14.0578 6.1875 14.4375C6.1875 15.1668 6.47723 15.8663 6.99296 16.382C7.50868 16.8978 8.20815 17.1875 8.9375 17.1875H13.0625C13.7918 17.1875 14.4913 16.8978 15.007 16.382C15.5228 15.8663 15.8125 15.1668 15.8125 14.4375C15.8125 13.7082 15.5228 13.0087 15.007 12.493C14.4913 11.9772 13.7918 11.6875 13.0625 11.6875H9.28125C8.18723 11.6875 7.13802 11.2529 6.36443 10.4793C5.59085 9.70573 5.15625 8.65652 5.15625 7.5625C5.15625 6.46848 5.59085 5.41927 6.36443 4.64568Z" fill="#8047F8"/>
                        </svg>
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <form>
                        <PaymentOptions>
                            <div>
                                <input type="radio" name="paymentMethod" id="credito" required/>
                                <label htmlFor="credito">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1 4.5C1 3.94772 1.44772 3.5 2 3.5H14C14.5523 3.5 15 3.94772 15 4.5V12.5C15 13.0523 14.5523 13.5 14 13.5H2C1.44772 13.5 1 13.0523 1 12.5V4.5ZM14 4.5H2V12.5H14V4.5Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M10 11C10 10.7239 10.2239 10.5 10.5 10.5H12.5C12.7761 10.5 13 10.7239 13 11C13 11.2761 12.7761 11.5 12.5 11.5H10.5C10.2239 11.5 10 11.2761 10 11Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M7 11C7 10.7239 7.22386 10.5 7.5 10.5H8.5C8.77614 10.5 9 10.7239 9 11C9 11.2761 8.77614 11.5 8.5 11.5H7.5C7.22386 11.5 7 11.2761 7 11Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M1 6.55627C1 6.28013 1.22386 6.05627 1.5 6.05627H14.5C14.7761 6.05627 15 6.28013 15 6.55627C15 6.83242 14.7761 7.05627 14.5 7.05627H1.5C1.22386 7.05627 1 6.83242 1 6.55627Z" fill="#8047F8"/></svg>
                                    Cartão de crédito
                                </label>
                            </div>

                            <div>
                                <input type="radio" name="paymentMethod" id="debito" required/>
                                <label htmlFor="debito">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1 4.5C1 3.94772 1.44772 3.5 2 3.5H14C14.5523 3.5 15 3.94772 15 4.5V12.5C15 13.0523 14.5523 13.5 14 13.5H2C1.44772 13.5 1 13.0523 1 12.5V4.5ZM14 4.5H2V12.5H14V4.5Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M10 11C10 10.7239 10.2239 10.5 10.5 10.5H12.5C12.7761 10.5 13 10.7239 13 11C13 11.2761 12.7761 11.5 12.5 11.5H10.5C10.2239 11.5 10 11.2761 10 11Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M7 11C7 10.7239 7.22386 10.5 7.5 10.5H8.5C8.77614 10.5 9 10.7239 9 11C9 11.2761 8.77614 11.5 8.5 11.5H7.5C7.22386 11.5 7 11.2761 7 11Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M1 6.55627C1 6.28013 1.22386 6.05627 1.5 6.05627H14.5C14.7761 6.05627 15 6.28013 15 6.55627C15 6.83242 14.7761 7.05627 14.5 7.05627H1.5C1.22386 7.05627 1 6.83242 1 6.55627Z" fill="#8047F8"/></svg>
                                    Cartão de débito
                                </label>
                            </div>

                            <div>
                                <input type="radio" name="paymentMethod" id="dinheiro" required/>
                                <label htmlFor="dinheiro">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1 4.5C1 3.94772 1.44772 3.5 2 3.5H14C14.5523 3.5 15 3.94772 15 4.5V12.5C15 13.0523 14.5523 13.5 14 13.5H2C1.44772 13.5 1 13.0523 1 12.5V4.5ZM14 4.5H2V12.5H14V4.5Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M10 11C10 10.7239 10.2239 10.5 10.5 10.5H12.5C12.7761 10.5 13 10.7239 13 11C13 11.2761 12.7761 11.5 12.5 11.5H10.5C10.2239 11.5 10 11.2761 10 11Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M7 11C7 10.7239 7.22386 10.5 7.5 10.5H8.5C8.77614 10.5 9 10.7239 9 11C9 11.2761 8.77614 11.5 8.5 11.5H7.5C7.22386 11.5 7 11.2761 7 11Z" fill="#8047F8"/><path fillRule="evenodd" clipRule="evenodd" d="M1 6.55627C1 6.28013 1.22386 6.05627 1.5 6.05627H14.5C14.7761 6.05627 15 6.28013 15 6.55627C15 6.83242 14.7761 7.05627 14.5 7.05627H1.5C1.22386 7.05627 1 6.83242 1 6.55627Z" fill="#8047F8"/></svg>
                                    dinheiro
                                </label>
                            </div>
                        </PaymentOptions>
                    </form>

                </BoxContainer>
                
            </OrderData>

            <CartData>
                <h2>Cafés selecionados</h2>

                <CartBox>
                    {coffeeCart.length > 0 ?
                        coffeeCart.map((coffee) => {
                            return <CartCoffeeCard key={coffee.coffee.id} coffee={coffee.coffee} coffeeQuantity={coffee.coffeeQuantity} />
                        })
                    :
                        <p className="emptyCartText">Nenhum café adicionado ao carrinho</p>
                    }

                    <div className="prices">
                        <div className="price">
                            <p>Total de itens</p>
                            <p>R$ {totalCoffeesPrice}</p>
                        </div>

                        <div className="price">
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </div>

                        <div className="total">
                            <p>Total</p>
                            <p>R$ 33,20</p>
                        </div>
                    </div>

                    <button className="confirmOrder">confirmar pedido</button>
                </CartBox>
            </CartData>
        </CheckoutContainer>
    )
}