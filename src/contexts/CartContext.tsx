import { ReactNode, createContext, useState } from "react";
import { CoffeeInterface } from '../components/CoffeCard/index.tsx'

interface AddCoffeeToCart{
    coffee: CoffeeInterface,
    coffeeQuantity: number
}

interface CartContext{
    coffeeCart: AddCoffeeToCart[],
    addCoffeeToCart: (coffee: AddCoffeeToCart) => void
}  

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({children}: CartContextProviderProps){
    const [ coffeeCart, setCoffeeCart ] = useState<AddCoffeeToCart[]>([])

    function addCoffeeToCart(coffeeToCart: AddCoffeeToCart){
        if(coffeeToCart.coffeeQuantity > 0){
            setCoffeeCart([...coffeeCart, coffeeToCart])
            localStorage.setItem('@coffee-delivery:coffee-cart-1.0.0', JSON.stringify(coffeeCart))
        }
    }

    return(
        <CartContext.Provider value={{coffeeCart, addCoffeeToCart}}>
            {children}
        </CartContext.Provider>
    )
}