import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeeInterface } from '../components/CoffeCard/index.tsx'

interface CoffeeInCart{
    coffee: CoffeeInterface,
    coffeeQuantity: number
}

interface CartContext{
    coffeeCart: CoffeeInCart[],
    addCoffeeToCart: (coffee: CoffeeInCart) => void,
    updateCoffeeCartQuantity: (coffeeId: string, coffeeQuantity: number) => void,
    removeCoffeeFromCart: (coffeeId: string) => void
}  

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({children}: CartContextProviderProps){
    const [ coffeeCart, setCoffeeCart ] = useState<CoffeeInCart[]>(() => {

        if(localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')){
            return JSON.parse(localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')!)
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('@coffee-delivery:coffee-cart-1.0.0', JSON.stringify(coffeeCart))
    }, [coffeeCart])

    function addCoffeeToCart(coffeeToCart: CoffeeInCart){
        if(coffeeToCart.coffeeQuantity > 0){
            setCoffeeCart([...coffeeCart, coffeeToCart])         
        }
    }

    function updateCoffeeCartQuantity(coffeeId: string, newCoffeeQuantity: number){
        if(newCoffeeQuantity > 0){
            const cartWithQuantityChanged = coffeeCart.map(coffee => {
                if(coffeeId === coffee.coffee.id){
                    return {...coffee, coffeeQuantity: newCoffeeQuantity}
                }

                return coffee
            })

            setCoffeeCart(cartWithQuantityChanged)
        }
    }

    function removeCoffeeFromCart(coffeeId: string){
        const cartWithCoffeeRemoved = coffeeCart.filter((coffee) => coffee.coffee.id !== coffeeId)

        setCoffeeCart(cartWithCoffeeRemoved)
    }

    return(
        <CartContext.Provider value={{coffeeCart, addCoffeeToCart, updateCoffeeCartQuantity, removeCoffeeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}