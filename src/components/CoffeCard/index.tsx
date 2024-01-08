import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CoffeeCardContainer } from './styles.ts'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext.tsx'

export interface CoffeeInterface{
    id: string,
    name: string,
    image: string,
    categories: [string],
    description: string,
    price: number
}

export interface CoffeeCardInterface{
    coffee: CoffeeInterface
}

export function CoffeeCard({coffee}: CoffeeCardInterface){
    const { coffeeCart, addCoffeeToCart } = useContext(CartContext)

    const [coffeeQuantity, setCoffeQuantity] = useState(() => {
        if(coffeeCart.length > 0){
            let coffeeAddedOnCart = coffeeCart.find(coffeeFromCart => coffeeFromCart.coffee.id === coffee.id)

            if(coffeeAddedOnCart){
                return coffeeAddedOnCart?.coffeeQuantity
            }else{
                return 0
            }
            
        }else{
            return 0
        }
    })


    function handleIncreaseButton(){
        const newCoffeeQuantity = coffeeQuantity + 1

        if(newCoffeeQuantity <= 99){
            setCoffeQuantity(newCoffeeQuantity)
        }
    }

    function handleDecreaseButton(){
        const newCoffeeQuantity = coffeeQuantity - 1

        if(newCoffeeQuantity >= 0){
            setCoffeQuantity(newCoffeeQuantity)
        }
    }

    function handleAddToCart(){
        const coffeesToCart = {coffee, coffeeQuantity}
        addCoffeeToCart(coffeesToCart)
    }

    return(
        <CoffeeCardContainer>
            <img src={coffee.image} alt={`Imagem café ${name}`} />
            <div className="categories">
                {coffee.categories.map((category) => {
                    return(
                        <span key={category}>{category}</span>
                    )
                })}
            </div>
            <h3>{coffee.name}</h3>
            <p className='description'>{coffee.description}</p>

            <div className='buy'>
                <p className='price'>R$ <span>{coffee.price.toFixed(2).toString().replace(".", ",")}</span></p>

                <div className="actions">
                    <div className="counter">
                        <button onClick={handleDecreaseButton}>
                            <Minus weight='bold' width={14} fill='#8047F8'/>
                        </button>
                        <input type="text" name="quantity" value={coffeeQuantity} size={20} disabled readOnly/>
                        <button onClick={handleIncreaseButton}>
                            <Plus weight='bold' width={14} fill='#8047F8'/>
                        </button>
                    </div>

                    <button className='cartButton' onClick={handleAddToCart}>
                        <ShoppingCart weight='fill' width={22} color='#F3F2F2' />
                    </button>
                </div>
            </div>
        </CoffeeCardContainer>
    )
}