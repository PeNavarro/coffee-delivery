import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CartCoffeeCardContainer } from './styles.ts'
import { useState } from 'react'

export interface CoffeeInterface{
    id: string,
    name: string,
    image: string,
    categories: [string],
    description: string,
    price: number
}

export interface CoffeeCardInterface{
    coffee: CoffeeInterface,
    coffeeQuantity: number
}

export function CartCoffeCard({coffee, coffeeQuantity}: CoffeeCardInterface){
    const [CartCoffeeQuantity, setCartCoffeQuantity] = useState(coffeeQuantity)

    const totalPrice = coffee.price * coffeeQuantity;

    function handleIncreaseButton(){
        const newCoffeeQuantity = coffeeQuantity + 1

        if(newCoffeeQuantity <= 99){
            setCartCoffeQuantity(newCoffeeQuantity)
        }
    }

    function handleDecreaseButton(){
        const newCoffeeQuantity = coffeeQuantity - 1

        if(newCoffeeQuantity >= 0){
            setCartCoffeQuantity(newCoffeeQuantity)
        }
    }

    return(
        <CartCoffeeCardContainer>
            <div className='coffeeData'>
                <img src={coffee.image} alt={`Imagem café ${name}`} />

                <div>
                    <h3>{coffee.name}</h3>
                    <div className="actions">
                        <div className="counter">
                            <button onClick={handleDecreaseButton}>
                                <Minus weight='bold' width={14} fill='#8047F8'/>
                            </button>
                            <input type="text" name="quantity" value={CartCoffeeQuantity} size={20} disabled readOnly/>
                            <button onClick={handleIncreaseButton}>
                                <Plus weight='bold' width={14} fill='#8047F8'/>
                            </button>
                        </div>
                        <button className="exclude" onClick={handleDecreaseButton}>
                            <Trash weight='bold' width={16} fill='#8047F8'/>
                            Remover
                        </button>
                    </div>
                </div>
            </div>

            <p className='price'>R$ <span>{totalPrice.toFixed(2).toString().replace(".", ",")}</span></p>
        </CartCoffeeCardContainer>
    )
}