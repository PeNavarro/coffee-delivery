import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CoffeeCardContainer } from './styles.ts'
import { useState } from 'react'

export interface CoffeeInterface{
    id: string,
    name: string,
    image: string,
    categories: [string],
    description: string,
    price: number
}

export function CoffeeCard({name, image, categories, description, price}: CoffeeInterface){
    const [coffeeQuantity, setCoffeQuantity] = useState(0)


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

    return(
        <CoffeeCardContainer>
            <img src={image} alt={`Imagem café ${name}`} />
            <div className="categories">
                {categories.map((category) => {
                    return(
                        <span key={category}>{category}</span>
                    )
                })}
            </div>
            <h3>{name}</h3>
            <p className='description'>{description}</p>

            <div className='buy'>
                <p className='price'>R$ <span>{price.toFixed(2).toString().replace(".", ",")}</span></p>

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

                    <button className='cartButton'>
                        <ShoppingCart weight='fill' width={22} color='#F3F2F2' />
                    </button>
                </div>
            </div>
        </CoffeeCardContainer>
    )
}